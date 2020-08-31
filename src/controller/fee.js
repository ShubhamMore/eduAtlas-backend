const errorHandler = require('../service/errorHandler');
const User = require('../model/user.model');
const EduAtlasId = require('../model/eduatlasId.model');
const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Fee = require('../model/fee.model');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const numberToWords = require('number-to-words');
const send = require('../service/mail');
const conversion = require('phantom-html-to-pdf')();

const awsUploadFile = require('../functions/awsUploadFile');
const awsRemoveFile = require('../functions/awsRemoveFile');

// const getFileSizeInBytes = (filename) => {
//   var stats = fs.statSync(filename);
//   var fileSizeInBytes = stats['size'];
//   return fileSizeInBytes;
// };

const getHtml = (receipt) => {
  const html = `
    <style>
      .padding {
        padding: 3px 5px;
      }

      .padding-large {
        padding: 8px 5px;
      }

      .border {
        border: 1px solid #000;
      }
      .text-center {
        text-align: center;
      }
      .text-right {
        text-align: center;
      }
      .float-left {
        float: left;
      }
      .float-right {
        float: right;
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      table,
      th,
      td {
        border: 1px solid black;
      }
    </style>
    <div class="padding border">
      <p>Tax/GST Number ${receipt.gstNo ? receipt.gstNo : '--'}</p>
    </div>
    <br />
    <div class="padding border text-center">
      <h4>${receipt.companyName}</h4>
      <p>${receipt.address}</p>
    </div>
    <br />

    <div class="text-center">
      <h3>Receipt</h3>
    </div>

    <div>
      <div class="float-right text-right">
        <p class=""><strong>Dated</strong><br />${receipt.date}</p>
        <p class=""><strong>Receipt Number</strong><br />${receipt.receiptNo}</p>
      </div>
      <div class="">
        <h4>Student Details</h4>
        <p>${receipt.studentName}<br />Roll No. ${receipt.rollNo}<br />Email: ${
    receipt.email
  }<br /></p>
      </div>
    </div>
    <br />
    <div>
      <table>
        <thead>
          <tr class="text-center">
            <th>Details/Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Course Code/Name: ${receipt.courseCode} <br />
              Total Amount Before tax <br />Add CGST: ${
                receipt.gstNo ? '9' : '0'
              }% <br />Add SGST: ${receipt.gstNo ? '9' : '0'}%
            </td>
            <td><br />${receipt.amount} <br />${receipt.cgst} <br />${receipt.sgst}</td>
          </tr>
          <tr>
            <td>
              <p><strong>Total After Tax</strong></p>
            </td>
            <td>
              <p><strong>${receipt.total}</strong></p>
            </td>
          </tr>
          <tr>
            <td>
              <p><strong>Amount Collected</strong></p>
            </td>
            <td>
              <p><strong>${receipt.amountCollected}</strong></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <div class="padding-large border">
      <p>Mode of Payment: ${receipt.paymentMode}</p>
    </div>
    <br />
    <div class="padding-large border">
      <p>Amount Collected in Words: ${receipt.amountInWords}</p>
    </div>
    <br />

    <div class="padding-large border">
      <p>Remark :</p>
      <br /><br /><br />
    </div>
    <br />
    <div>
      <h5>INVOICE NOTES/ TERMS & CONDITIONS:</h5>
      <p>${receipt.termsConditions}</p>
    </div>
    <br /><br />
    <div>
      <p class="text-center">
        <small>This is an electronic receipt and does not require a physical stamp or signature.</small>
        <br /><br />
        <span>STUDY MONITOR APP powered by EDUATLAS.COM</span>
      </p>
    </div>
  `;
  return html;
};

const getReceiptData = async (studentId, courseId, instituteId) => {
  let receiptData = await Institute.findById(instituteId, { reciept: 1, _id: 0 });
  receiptData = receiptData.reciept;

  const student = await Student.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(studentId),
      },
    },
    {
      $unwind: '$instituteDetails',
    },
    {
      $match: {
        'instituteDetails.instituteId': instituteId,
        'instituteDetails.courseId': courseId,
      },
    },
    {
      $project: {
        basicDetails: 1,
        instituteDetails: 1,
      },
    },
  ]);

  let course = await Institute.findOne({ _id: instituteId }, { course: 1, _id: 0 });
  course = course.course;
  course = course.filter((c) => c._id == courseId);
  course = course[0];

  const curDate = new Date();

  const date =
    curDate.getDate().toString().padStart(2, '0') +
    '-' +
    (curDate.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    curDate.getFullYear().toString();
  const receipt = {
    gstNo: receiptData.gstNumber,
    companyName: receiptData.businessName,
    address: receiptData.address,
    date,
    studentName: student[0].basicDetails.name,
    rollNo: student[0].instituteDetails.rollNumber,
    email: student[0].basicDetails.studentEmail,
    courseCode: course.courseCode,
    termsConditions: receiptData.termsAndCondition,
    invoiceNo: receiptData.invoiceNo,
  };

  return receipt;
};

exports.addFee = async (req, res) => {
  try {
    const checkStudent = await Student.find({
      $and: [
        {
          _id: req.body.studentId,
        },
        {
          'instituteDetails.instituteId': req.body.instituteId,
        },
        {
          'instituteDetails.courseId': req.body.courseId,
        },
      ],
    });

    if (checkStudent.length == 0) {
      throw new Error("Course for Student doesn't exists");
    }

    const fees = new Fee(req.body);

    const receipt = await getReceiptData(fees.studentId, fees.courseId, fees.instituteId);

    fees.installments.forEach(async (curInstallment, i) => {
      if (curInstallment.paidStatus === 'true' && !curInstallment.receipt.secureUrl) {
        let gst = 0;

        if (receipt.gstNo && receipt.gstNo != undefined) {
          gst = (+curInstallment.amount / 100) * 18;
        }

        const amount = (+curInstallment.amount - gst).toFixed(2);

        receipt.invoiceNo = +receipt.invoiceNo + 1;

        const receiptNo = receipt.invoiceNo;
        const date = new Date();
        const curYear = date.getFullYear();

        const finantialYear =
          date.getMonth() < 3
            ? curYear - 1 + '-' + curYear.toString().substr(2)
            : curYear + '-' + (curYear + 1).toString().substr(2);

        receipt.receiptNo = finantialYear + '/' + receiptNo.toString().padStart(6, '0');
        receipt.amount = amount;
        receipt.cgst = (gst / 2).toFixed(2);
        receipt.sgst = (gst / 2).toFixed(2);
        receipt.total = curInstallment.amount;
        receipt.amountCollected = curInstallment.amount;
        receipt.paymentMode = curInstallment.paymentMode;
        receipt.amountInWords = numberToWords.toWords(+receipt.amountCollected);

        const html = getHtml(receipt);

        const fileName = `receipt-${curInstallment._id}.pdf`;
        const filePath = path.join(__dirname, `../../receipts/${fileName}`);
        conversion({ html }, async (err, pdf) => {
          const output = fs.createWriteStream(filePath);
          pdf.stream.pipe(output);

          const fileSize = 25100;
          const cloudDirectory = fees.instituteId + '/receipts';

          const institute = await Institute.findById(fees.instituteId, {
            storageUsed: 1,
            totalStorage: 1,
          });

          if (!institute) {
            throw new Error('Institute Not Found');
          }

          let storageUsed = institute.storageUsed;

          if (+institute.totalStorage < +storageUsed + fileSize) {
            throw new Error('Your Storage is Full, Please Upgrade Your Plan for More storage');
          }

          const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

          const upload_res = uploadResponce.upload_res;

          let receiptData = {
            fileName: upload_res.key
              .split('/')[2]
              .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
              .split('-')
              .join(' ')
              .toUpperCase(),

            fileSize: fileSize,
            secureUrl: upload_res.Location,
            publicId: upload_res.key,
            createdAt: Date.now(),
          };

          fees.installments[i].receipt = receiptData;

          const mail = {
            to: receipt.email,
            from: process.env.GMAIL_USER,
            subject: 'Receipt',
            html: `
              <h2>Invoice from ${receipt.companyName}</h2>
              Click Here <a href="${receipt.secureUrl}">Download Receipt</a>
            `,
          };

          await send(mail);

          await fees.save();

          storageUsed = storageUsed + fileSize;

          await Institute.updateOne(
            { _id: mongoose.Types.ObjectId(fees.instituteId) },
            { 'reciept.invoiceNo': receipt.invoiceNo, storageUsed }
          );
        });
      }
    });

    await fees.save();
    res.status(200).send(fees);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getFeeOfStudent = async (req, res) => {
  try {
    const studentFee = await Fee.find({
      studentId: req.body.studentId,
    });

    if (studentFee.length == 0) {
      const error = new Error('No Student Fee Available');
      error.statusCode = 400;
      throw error;
    }

    res.status(200).send(studentFee);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getFeeOfStudentByCourse = async (req, res) => {
  try {
    const studentCourseFee = await Fee.find({
      studentId: req.body.studentId,
      instituteId: req.body.instituteId,
      courseId: req.body.courseId,
    });

    res.status(200).send(studentCourseFee);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateFeeOfStudent = async (req, res) => {
  try {
    const fees = await Fee.findById(req.body._id);

    if (!fees) {
      throw new Error('Fees Not Found');
    }

    const receipt = await getReceiptData(fees.studentId, fees.courseId, fees.instituteId);

    const installments = fees.installments;

    fees.amountCollected = req.body.amountCollected;
    fees.pendingAmount = req.body.pendingAmount;
    fees.installments = req.body.installments;
    fees.installments.forEach(async (curInstallment, i) => {
      const institute = await Institute.findById(fees.instituteId, {
        storageUsed: 1,
        totalStorage: 1,
      });

      if (!institute) {
        throw new Error('Institute Not Found');
      }

      let storageUsed = institute.storageUsed;

      if (curInstallment.paidStatus === 'true' && !installments[i].receipt.secureUrl) {
        let gst = 0;

        if (receipt.gstNo && receipt.gstNo != undefined) {
          gst = (+curInstallment.amount / 100) * 18;
        }

        const amount = (+curInstallment.amount - gst).toFixed(2);

        receipt.invoiceNo = +receipt.invoiceNo + 1;

        const receiptNo = receipt.invoiceNo;
        const date = new Date();
        const curYear = date.getFullYear();

        const finantialYear =
          date.getMonth() < 3
            ? curYear - 1 + '-' + curYear.toString().substr(2)
            : curYear + '-' + (curYear + 1).toString().substr(2);

        receipt.receiptNo = finantialYear + '/' + receiptNo.toString().padStart(6, '0');
        receipt.amount = amount;
        receipt.cgst = (gst / 2).toFixed(2);
        receipt.sgst = (gst / 2).toFixed(2);
        receipt.total = curInstallment.amount;
        receipt.amountCollected = curInstallment.amount;
        receipt.paymentMode = curInstallment.paymentMode;
        receipt.amountInWords = numberToWords.toWords(+receipt.amountCollected);

        const html = getHtml(receipt);

        const fileName = `receipt-${curInstallment._id}.pdf`;
        const filePath = path.join(__dirname, `../../receipts/${fileName}`);
        conversion({ html }, async (err, pdf) => {
          const output = fs.createWriteStream(filePath);
          pdf.stream.pipe(output);

          const fileSize = 25100;
          const cloudDirectory = fees.instituteId + '/receipts';

          if (+institute.totalStorage < +storageUsed + fileSize) {
            throw new Error('Your Storage is Full, Please Upgrade Your Plan for More storage');
          }

          const uploadResponce = await awsUploadFile(
            `receipts/${fileName}`,
            fileName,
            cloudDirectory
          );

          const upload_res = uploadResponce.upload_res;

          let receiptData = {
            fileName: upload_res.key
              .split('/')[2]
              .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
              .split('-')
              .join(' ')
              .toUpperCase(),

            fileSize: fileSize,
            secureUrl: upload_res.Location,
            publicId: upload_res.key,
            createdAt: Date.now(),
          };

          fees.installments[i].receipt = receiptData;

          const mail = {
            to: receipt.email,
            from: process.env.GMAIL_USER,
            subject: 'Receipt',
            html: `
              <h2>Invoice from ${receipt.companyName}</h2>
              Click Here <a href="${receipt.secureUrl}">Download Receipt</a>
            `,
          };

          await send(mail);

          await fees.save();

          storageUsed = storageUsed + fileSize;

          await Institute.updateOne(
            { _id: mongoose.Types.ObjectId(fees.instituteId) },
            { 'reciept.invoiceNo': receipt.invoiceNo, storageUsed }
          );
        });
      } else if (curInstallment.paidStatus === 'false' && installments[i].receipt.secureUrl) {
        const curReceipt = installments[i].receipt;

        await awsRemoveFile(curReceipt.publicId);

        let receiptData = {
          fileName: null,
          fileSize: null,
          secureUrl: null,
          publicId: null,
          createdAt: null,
        };

        fees.installments[i].receipt = receiptData;

        await fees.save();

        storageUsed = storageUsed - curReceipt.fileSize;

        await Institute.updateOne(
          { _id: mongoose.Types.ObjectId(fees.instituteId) },
          { storageUsed }
        );
      }
    });

    // fees.installments.forEach(async (curInstallment, i) => {
    //   if (curInstallment.paidStatus === 'true' && curInstallment.receiptLink === '') {
    // let gst = 0;

    //   if (receipt.gstNo && receipt.gstNo != undefined) {
    //     gst = (+curInstallment.amount / 100) * 18;
    //   }
    //     const amount = (+curInstallment.amount - gst).toFixed(2);

    //     receipt.invoiceNo = +receipt.invoiceNo + 1;

    //     const receiptNo = receipt.invoiceNo;
    //     const date = new Date();
    //     const curYear = date.getFullYear();

    //     const finantialYear =
    //       date.getMonth() < 3
    //         ? curYear - 1 + '-' + curYear.toString().substr(2)
    //         : curYear + '-' + (curYear + 1).toString().substr(2);

    //     receipt.receiptNo = finantialYear + '/' + receiptNo.toString().padStart(6, '0');
    //     receipt.amount = amount;
    //     receipt.cgst = (gst / 2).toFixed(2);
    //     receipt.sgst = (gst / 2).toFixed(2);
    //     receipt.total = curInstallment.amount;
    //     receipt.amountCollected = curInstallment.amount;
    //     receipt.paymentMode = curInstallment.paymentMode;
    //     receipt.amountInWords = numberToWords.toWords(+receipt.amountCollected);

    //     const html = getHtml(receipt);

    //     const receiptUrl = path.join(__dirname, `../../receipts/receipt-${curInstallment._id}.pdf`);
    //     conversion({ html }, async (err, pdf) => {
    //       const output = fs.createWriteStream(receiptUrl);
    //       const receiptLink =
    //         process.env.SERVER + `receipts/receipt-${curInstallment._id}.pdf`.toString();
    //       fees.installments[i].receiptLink = receiptLink;

    //       pdf.stream.pipe(output);

    //       const mail = {
    //         to: receipt.email,
    //         from: process.env.GMAIL_USER,
    //         subject: 'Receipt',
    //         html: `
    //           <h2>Invoice from ${receipt.companyName}</h2>
    //           Click Here <a href="${receiptLink}">Download Receipt</a>
    //         `,
    //       };

    //       await send(mail);

    //       await fees.save();
    //       await Institute.updateOne(
    //         { _id: mongoose.Types.ObjectId(fees.instituteId) },
    //         { 'reciept.invoiceNo': receipt.invoiceNo }
    //       );
    //     });
    //   }
    // });

    await fees.save();

    res.status(200).send(fees);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPendingFeeByInstitute = async (req, res) => {
  try {
    const feeDetails = await Fee.find({
      instituteId: req.body.instituteId,
      pendingAmount: {
        $ne: '0',
      },
    });

    const feeDetails2 = await Fee.aggregate([
      {
        $match: {
          instituteId: req.body.instituteId,
          pendingAmount: {
            $ne: '0',
          },
        },
      },
      {
        $lookup: {
          from: Student.collection.name,
          localField: 'studentId',
          foreignField: '_id',
          as: 'PendingFee',
        },
      },
      // {
      //   $unwind:"$PendingFee"
      // },{
      //   $lookup:{
      //     "from":"institutes",
      //     "localField":"PendingFee.courseId",
      //     "foreignField":"institute.course._id",
      //     "as":"FeeOfInstitute"
      //   }
      // },
    ]);

    res.status(200).send(feeDetails);
  } catch (error) {
    res.status(400).send(error);
  }
};
