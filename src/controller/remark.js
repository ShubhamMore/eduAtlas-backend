const Remarks = require('../model/remarks');
const errorHandler = require('../service/errorHandler');

exports.addRemark = async (req, res) => {
  try {
    const addRemark = await Remarks.updateOne(
      {
        studentId: req.body.studentId,
      },
      {
        $push: {
          remarks: req.body.remarks,
        },
      },
      {
        upsert: true,
      }
    );
    // const newRemark = new Remarks(req.body);
    // await newRemark.save();
    res.status(200).send(addRemark);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getRemarkOfStudentByInstitute = async (req, res) => {
  try {
    let instData = {};

    if (!req.body.courseId && !req.body.batchId) {
      instData = {
        $match: {
          'remarks.instituteId': req.body.instituteId,
        },
      };
    } else if (!req.body.batchId && req.body.courseId) {
      instData = {
        $match: {
          'remarks.instituteId': req.body.instituteId,
          'remarks.courseId': req.body.courseId,
        },
      };
    } else if (req.body.courseId && req.body.batchId) {
      instData = {
        $match: {
          'remarks.instituteId': req.body.instituteId,
          'remarks.courseId': req.body.courseId,
          'remarks.batchId': req.body.batchId,
        },
      };
    }

    const studentRemarks = await Remarks.aggregate([
      {
        $match: {
          studentId: req.body.studentId,
        },
      },
      {
        $unwind: '$remarks',
      },
      instData,
    ]);

    res.status(200).send(studentRemarks);
  } catch (error) {
    errorHandler(error, res);
  }
};
