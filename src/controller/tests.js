const Test = require('../model/test.model');
const fs = require('fs').promises;
const path = require('path');
const XLSX = require('xlsx');
const Institute = require('../model/institute.model')
const Student = require('../model/student.model')
const excelToJson = require('convert-excel-to-json');
const errorHandler = require('../service/errorHandler');
const response = require('../service/response');

const request = require('request');
const rp = require('request-promise');

const deleteFile = (filePath) => {
    fs.unlink(path.join(__dirname + '../../../' + filePath), (error) => {
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

exports.addTestScore = async(req,res)=>{
    try {
        const updateScore = await Test.updateOne({
            _id:req.body._id
        },{
            $set: {
                students: req.body.scores
            }
        })  
        res.status(200).send(updateScore)         
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.addScoreUsingExcel = async(req,res)=>{
    try {
        console.log("in here",path.join(__dirname + '../../../' + req.file.path))

        const file = path.join(__dirname + '../../../' + req.file.path)
        const excelData =  excelToJson({
            sourceFile:file,
            
            sheets:[{
                name:"Sheet1",
                
                header:{
                    rows:1
                },
                columnToKey:{
                    A:"testName",
                    B:"batchCode",
                    C:"courseCode"
                }
            },{
                name:"Sheet2",

                header:{
                    rows:1
                },

                columnToKey:{
                    A:"rollNo",
                    B:"_id",
                    C:"marks"
                }
            }]
        })

        console.log(excelData)

        const getBatch = await Institute.findOne({
            $and:[{
                "course.courseCode":excelData.Sheet1.courseCode    
            },{
                "batch.batchCode":excelData.Sheet1.batchCode
            }]
        })

        if(!batch){
            const error = new Error('Batch not Found');
            error.statusCode = 400;
            throw error;
        }

        const testDetails = await Test.findOne({
            $and:[{
                testName:excelData.Sheet1.testName
            },{
                courseId:getBatch.course._id
            },{
               batchId:getBatch.batch._id 
            }]    
        })
        if(!testDetails){
            const error = new Error('Test not Found');
            error.statusCode = 400;
            throw error; 
        }

        for(var i = 0;i<excelData.Sheet2.length;i++){
            const student = await Student.findOne({
                $and:[{
                    "instituteDetails.courseId" : getBatch.course._id,
                },
                {
                    "instituteDetails.batch" : getBatch.batch._id
                },{
                    "instituteDetails.rollNo": excelData.Sheet2[i].rollNo
                }]
            })
            if(!student){
                const error = new Error('student not Found');
                error.statusCode = 400;
                throw error; 
            }
            excelData.Sheet2[i]._id = student._id
        }

        const updateScore = await Test.updateOne({
            _id:testDetails._id
        },{
            $set:{
                scores:excelData.Sheet2
            }
        })

        res.status(200).send(updateScore)
    } catch (error) {
     console.log(error)
     errorHandler(error, res);
   
    }
}
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
}

exports.deleteTest = async (req, res) => {
  try {
    const deleteTest = await Test.deleteOne({
      _id: req.body._id,
    });
    res.status(200).send(deleteTest);
  } catch (error) {
    res.status(400).send(error);
  }
}
