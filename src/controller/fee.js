const errorHandler = require('../service/errorHandler');
const User = require('../model/user.model');
const EduAtlasId = require('../model/eduatlasId.model');
const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Fee = require('../model/fee.model');

var fs = require('fs');
var path = require('path');

var conversion = require('phantom-html-to-pdf')();

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
      console.log('in error');
      const error = new Error("Course for Student doesn't exists");
      //error.prototype.statusCode = 400;
      throw error;
    }

    const fees = new Fee(req.body);

    fees.installments.forEach(async (curInstallment, i) => {
      // console.log(
      //   curInstallment.paidStatus === 'true',
      //   curInstallment.receiptLink === '',
      //   curInstallment
      // );
      if (curInstallment.paidStatus === 'true' && curInstallment.receiptLink === '') {
        const html = `
          <h1>Receipt</h1>
        `;
        const receiptUrl = path.join(__dirname, `../../receipts/receipt-${curInstallment._id}.pdf`);
        conversion({ html }, async (err, pdf) => {
          console.log(err);
          const output = fs.createWriteStream(receiptUrl);
          fees.installments[i].receiptLink =
            process.env.SERVER + `receipts/receipt-${curInstallment._id}.pdf`.toString();
          console.log(fees.installments[i].receiptLink);
          console.log(pdf.logs);
          pdf.stream.pipe(output);
          await fees.save();
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

    fees.installments = req.body.installments;

    fees.installments.forEach(async (curInstallment, i) => {
      // console.log(
      //   curInstallment.paidStatus === 'true',
      //   curInstallment.receiptLink === '',
      //   curInstallment
      // );
      if (curInstallment.paidStatus === 'true' && curInstallment.receiptLink === '') {
        const html = `
          <h1>Receipt</h1>
        `;
        const receiptUrl = path.join(__dirname, `../../receipts/receipt-${curInstallment._id}.pdf`);
        conversion({ html }, async (err, pdf) => {
          console.log(err);
          const output = fs.createWriteStream(receiptUrl);
          fees.installments[i].receiptLink =
            process.env.SERVER + `receipts/receipt-${curInstallment._id}.pdf`.toString();
          console.log(fees.installments[i].receiptLink);
          console.log(pdf.logs);
          pdf.stream.pipe(output);
          await fees.save();
        });
      }
    });

    await fees.save();

    res.status(200).send(fees);
  } catch (error) {
    console.log(error);
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
    console.log(feeDetails2);
    res.status(200).send(feeDetails);
  } catch (error) {
    res.status(400).send(error);
  }
};
