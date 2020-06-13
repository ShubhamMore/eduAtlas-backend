const mongoose = require('mongoose');
const Test = require('../model/test.model');
const fs = require('fs').promises;
const path = require('path');
const XLSX = require('xlsx');
const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const excelToJson = require('convert-excel-to-json');
const errorHandler = require('../service/errorHandler');
const response = require('../service/response');

const request = require('request');
const rp = require('request-promise');

const deleteFile = (filePath) => {
  fs.unlink(path.join(__dirname + '../../../' + filePath), (error) => {
    console.log('deleteFile');
    if (error) {
      console.log(error);
      const err = new Error('Error while deleting the File');
      err.statusCode = 500;
      throw err;
    }
    console.log('File Deleted successfully');
  });
};

exports.addTest = async (req, res) => {
  try {
    const addTest = new Test(req.body);
    await addTest.save();
    res.status(200).send(addTest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getTestByInstitute = async (req, res) => {
  try {
    console.log(req.body);

    let query = {};

    if (!req.body.batchId) {
      query = {
        instituteId: req.body.instituteId,
      };
    } else {
      query = {
        instituteId: req.body.instituteId,
        batchId: req.body.batchId,
      };
    }
    const batchTest = await Test.find(query);

    res.status(200).send(batchTest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getTestsForReports = async (req, res) => {
  try {
    const batchTest = await Test.find({
      instituteId: req.body.instituteId,
      batchId: req.body.batchId,
      students: {
        $exists: true,
        $ne: [],
      },
    });

    res.status(200).send(batchTest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSingleTest = async (req, res) => {
  try {
    console.log(req.body);
    const singleTest = await Test.findOne({
      _id: req.body._id,
    });
    if (!singleTest) {
      throw new Error('No test Found');
    }
    res.status(200).send(singleTest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.addTestScore = async (req, res) => {
  try {
    const updateScore = await Test.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: {
          students: req.body.scores,
        },
      }
    );
    res.status(200).send(updateScore);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.addScoreUsingExcel = async (req, res) => {
  console.log('in here', path.join(__dirname + '../../../' + req.file.path));
  try {
    const file = path.join(__dirname + '../../../' + req.file.path);
    const excelData = excelToJson({
      sourceFile: file,

      sheets: [
        {
          name: 'Sheet1',

          header: {
            rows: 1,
          },

          columnToKey: {
            A: 'rollNo',
            // B: 'name',
            B: 'marks',
          },
        },
      ],
    });

    console.log(excelData);

    const testDetails = await Test.findOne({
      _id: req.body._id,
    });
    console.log(testDetails);

    if (!testDetails) {
      const error = new Error('Test not Found');
      error.statusCode = 400;
      throw error;
    }

    for (var i = 0; i < excelData.Sheet1.length; i++) {
      const student = await Student.aggregate([
        {
          $unwind: '$instituteDetails',
        },
        {
          $match: {
            'instituteDetails.courseId': testDetails.courseId,
            'instituteDetails.batchId': testDetails.batchId,
            'instituteDetails.rollNumber': excelData.Sheet1[i].rollNo + '',
          },
        },
      ]);
      if (student.length == 0) {
        const error = new Error('student not Found');
        error.statusCode = 400;
        throw error;
      }
      console.log(student);
      excelData.Sheet1[i].studentId = student[0]._id;
    }
    console.log(excelData);
    const updateScore = await Test.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: {
          students: excelData.Sheet1,
        },
      }
    );
    deleteFile(req.file.path);
    res.status(200).send(updateScore);
  } catch (error) {
    // console.log(error);
    errorHandler(error, res);
  }
};
exports.updateTest = async (req, res) => {
  try {
    const updateTest = await Test.updateOne(
      {
        _id: req.body._id,
      },
      req.body,
      {
        upsert: false,
      }
    );
    res.status(200).send(updateTest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getScoreOfStudentByBatch = async (req, res) => {
  try {
    const studentScoreByBatch = await Test.aggregate([
      {
        $unwind: '$students',
      },
      {
        $match: {
          batchId: req.body.batchId,
          'students.studentId': req.body.studentId,
        },
      },
    ]);

    res.status(200).send(studentScoreByBatch);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getScoresOfStutdent = async (req, res) => {
  try {
    const score = await Test.aggregate([
      {
        $unwind: '$students',
      },
      {
        $match: {
          'students.studentId': req.body.studentId,
        },
      },
    ]);
    res.status(200).send(score);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTest = async (req, res) => {
  try {
    const deleteTest = await Test.deleteOne({
      _id: req.body._id,
    });
    res.status(200).send(deleteTest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getScoresOfStutdentByInstitute = async (req, res) => {
  try {
    const studentScore = await Test.aggregate([
      {
        $unwind: '$students',
      },
      {
        $match: {
          instituteId: req.body.instituteId,
          'students.studentId': req.body.studentId,
        },
      },
    ]);
    for (var i = 0; i < studentScore.length; i++) {
      const student = await Student.findOne({ _id: req.body.studentId });
      studentScore[i].students.studentName = student.basicDetails.name;
      studentScore[i].students.percentage =
        (studentScore[i].students.marks / studentScore[i].totalMarks) * 100;
    }

    res.status(200).send(studentScore);
  } catch (error) {
    res.status(400).send(error);
  }
};
