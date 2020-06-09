const Test = require('../model/test.model');

const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const excelToJson = require('convert-excel-to-json');

const request = require('request');
const rp = require('request-promise');

exports.addTest = async (req, res) => {
  try {
    const addTest = new Test(req.body);
    await addTest.save();
    res.status(200).send(addTest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getTestByBatch = async (req, res) => {
  try {
    console.log(req.body);
    const batchTest = await Test.find({
      instituteId: req.body.instituteId,
      batchId: req.body.batchId,
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
  try {
    console.log('in here');
    const excelData = excelToJson({
      sourceFile: req.file,
      headers: {
        rows: 1,
      },
      sheets: [
        {
          name: 'sheet1',
          columnToKey: {
            A: 'testName',
            B: 'batchCode',
            C: 'courseCode',
          },
        },
        {
          name: 'sheet2',
          columnToKey: {
            A: 'rollNo',
            B: 'Name',
            C: 'marks',
          },
        },
      ],
    });
    console.log(excelData);

    res.status(200).send(excelData);
  } catch (error) {
    console.log(error);
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
