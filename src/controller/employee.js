const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const User = require('../model/user.model');
const EduAtlasId = require('../model/eduatlasId.model');
const Employee = require('../model/employee.model');
const Institute = require('../model/institute.model');
const mongoose = require('mongoose');
const send = require('../service/mail');

exports.addEmployee = async (req, res) => {
  try {
    const user = await User.find({
      $or: [
        {
          phone: req.body.basicDetails.employeeContact,
        },
        {
          email: req.body.basicDetails.employeeEmail,
        },
      ],
    });

    if (user.length != 0) {
      const error = new Error('User Already Exists');
      //error.prototype.statusCode = 400;
      throw error;
    }
    //EDU-2020-ST-000000
    const eduatlasId = await EduAtlasId.find({});
    //
    var studentId = eduatlasId[0].empEduId.split('-');
    var d = new Date();
    var newEduAtlasId = 'EDU-' + d.getFullYear() + '-EMP-' + (parseInt(studentId[3]) + 1);

    const newUser = {
      name: req.body.basicDetails.name,
      role: 'employee',
      phone: req.body.basicDetails.employeeContact,
      email: req.body.basicDetails.employeeEmail,
      password: req.body.basicDetails.employeeContact,
      eduAtlasId: newEduAtlasId.split('-').join(''),
    };

    const addUser = new User(newUser);
    await addUser.save();

    // const token = await addUser.generateAuthToken();
    // const url = process.env.SERVER + 'users/verifyEmail?token=' + token;

    // // Send Mail Here
    // const mail = {
    //   to: req.body.email,
    //   from: 'admin@eduatlas.in',
    //   subject: 'EDUATLAS: VERIFY EMAIL',
    //   html: `<a href= '${url}'> ${url} </a>`,
    // };

    const newEmployee = {
      basicDetails: req.body.basicDetails,
      instituteDetails: req.body.instituteDetails,
      eduAtlasId: newEduAtlasId.split('-').join(''),
    };

    const addEmployee = new Employee(newEmployee);

    await addEmployee.save();

    await EduAtlasId.updateOne(
      { _id: eduatlasId[0]._id },
      {
        $set: {
          empEduId: newEduAtlasId,
        },
      }
    );
    const instituteDetails = await Institute.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.instituteDetails.instituteId),
        },
      },
      {
        $project: {
          basicInfo: 1,
          parentUser: {
            $toObjectId: '$parentUser',
          },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'parentUser',
          foreignField: '_id',
          as: 'parentInstitute',
        },
      },
      {
        $unwind: '$parentInstitute',
      },
      {
        $project: {
          basicInfo: 1,
          'parentInstitute.name': 1,
          'parentInstitute.email': 1,
          'parentInstitute.phone': 1,
        },
      },
    ]);

    // Send Mail Here
    // Send Mail Code Here
    let mail = {
      from: 'admin@eduatlas.in',
      to: req.body.basicDetails.employeeEmail,
      subject: 'INSTITUTE REQUEST EDUATLAS',
      html:
        '<!DOCTYPE html>' +
        '<html><head><title>YOUR ACCOUT HAS BEEN CREATED AT EDUATLAS.COM</title>' +
        '</head><body><div>' +
        '<p>Dear ' +
        req.body.basicDetails.name +
        ',<br> The Following Institute has added you</p>' +
        '<p>INSTITUTE NAME:' +
        instituteDetails[0].parentInstitute.name +
        '</p>' +
        '<p>BRANCH NAME: ' +
        instituteDetails[0].basicInfo.name +
        '</p>' +
        '<p>CONTACT: ' +
        instituteDetails[0].basicInfo.instituteContact +
        '</p>' +
        '<p>EDUATLAS ID: ' +
        newEduAtlasId +
        '</p>' +
        '<p>FOR LOGIN CREDENTIALS: </p>' +
        '<p>EMAIL: ' +
        req.body.basicDetails.employeeEmail +
        '</p>' +
        '<p>PASSWORD: ' +
        req.body.basicDetails.employeeContact +
        '</p>' +
        '<p>Thank you</p>' +
        '<p>EDUATLAS </p>' +
        '</div></body></html>',
    };

    res.status(200).send(addUser);
    await send(mail);
  } catch (error) {
    response(res, 500, error.message);
  }
};

exports.addEmployeeInstitute = async (req, res) => {
  try {
    const check = await Employee.find({
      $and: [
        {
          eduAtlasId: req.body.eduAtlasId,
        },
        {
          'instituteDetails.instituteId': req.body.instituteDetails.instituteId,
        },
      ],
    });

    if (check.length != 0) {
      const error = new Error('Employee Already Exists');
      error.statusCode = 400;
      throw error;
    }

    const updateEmployee = await Employee.update(
      {
        eduAtlasId: req.body.eduAtlasId,
      },
      {
        $push: {
          instituteDetails: req.body.instituteDetails,
        },
      }
    );

    const instituteDetails = await Institute.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.instituteDetails.instituteId),
        },
      },
      {
        $project: {
          basicInfo: 1,
          parentUser: {
            $toObjectId: '$parentUser',
          },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'parentUser',
          foreignField: '_id',
          as: 'parentInstitute',
        },
      },
      {
        $unwind: '$parentInstitute',
      },
      {
        $project: {
          basicInfo: 1,
          'parentInstitute.name': 1,
          'parentInstitute.email': 1,
          'parentInstitute.phone': 1,
        },
      },
    ]);
    const empDetails = await Employee.findOne({
      eduAtlasId: req.body.eduAtlasId,
    });

    // Send Mail Here
    // Send Mail Code Here
    let mail = {
      from: 'admin@eduatlas.in',
      to: empDetails.basicDetails.employeeEmail,
      subject: 'INSTITUTE REQUEST EDUATLAS',
      html:
        '<!DOCTYPE html>' +
        '<html><head><title>COURSE ADDED</title>' +
        '</head><body><div>' +
        '<p>Dear ' +
        empDetails.basicDetails.employeeName +
        ',<br> The Following Institute has added you</p>' +
        '<p>INSTITUTE NAME:' +
        instituteDetails[0].parentInstitute.name +
        '</p>' +
        '<p>BRANCH NAME: ' +
        instituteDetails[0].basicInfo.name +
        '</p>' +
        '<p>CONTACT: ' +
        instituteDetails[0].basicInfo.instituteContact +
        '</p>' +
        '<p>Thank you</p>' +
        '<p>EDUATLAS </p>' +
        '</div></body></html>',
    };

    res.status(200).json(updateEmployee);
    send(mail);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getEmployeeInstitutes = async (req, res) => {
  try {
    const employeeInstitutes = await Employee.find(
      {
        'basicDetails.employeeEmail': req.body.email,
      },
      {
        instituteDetails: 1,
      }
    );

    const empInst = employeeInstitutes[0].instituteDetails;

    const instituteArray = new Array();
    const institutes = await Institute.find(
      { active: true },
      { _id: 1, basicInfo: 1, address: 1, active: 1, currentPlan: 1 }
    );

    empInst.forEach((inst) => {
      const institute = institutes.find((curInst) => curInst._id == inst.instituteId);

      if (institute) {
        const data = {
          _id: institute._id,
          role: inst.role,
          basicInfo: institute.basicInfo,
          address: institute.address,
          active: institute.active,
          currentPlan: institute.currentPlan,
        };
        instituteArray.push(data);
      }
    });

    res.status(200).send(instituteArray);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getEmployeeByEduatlasId = async (req, res) => {
  try {
    const getEmployee = await Employee.findOne(
      {
        $or: [
          {
            eduAtlasId: req.body.eduAtlasId,
          },
          {
            'basicDetails.employeeEmail': req.body.eduAtlasId,
          },
        ],
      },
      {
        basicDetails: 1,
        eduAtlasId: 1,
      }
    );

    if (!getEmployee) {
      throw new Error('Wrong Employee Id');
    }

    res.status(200).send(getEmployee);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getOneEmployeeByInstitute = async (req, res) => {
  try {
    const getEmployee = await Employee.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.empId),
          'instituteDetails.instituteId': req.body.instituteId,
        },
      },
    ]);

    if (getEmployee.length == 0) {
      const error = new Error('Employee Not Found');
      error.statusCode = 400;
      throw error;
    }
    res.status(200).send(getEmployee);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getEmployeesByEmail = async (req, res) => {
  try {
    const employee = await Employee.findOne({
      'basicDetails.employeeEmail': req.body.email,
    });

    if (!employee) {
      const error = new Error('Employee Not Found');
      error.statusCode = 400;
      throw error;
    }
    res.status(200).send(employee);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getEmployeesByInstituteId = async (req, res) => {
  try {
    const getEmployees = await Employee.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
        },
      },
    ]);

    res.status(200).send(getEmployees);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getEmployeePersonalDetails = async (req, res) => {
  try {
    const employeeDetails = await Employee.find(
      {
        $and: [
          {
            _id: req.body.empId,
          },
          {
            eduatlasId: req.body.eduAtlasId,
          },
        ],
      },
      {
        basicDetails: 1,
      }
    );

    if (employeeDetails.length == 0) {
      const error = new Error('Employee not Found');
      error.statusCode = 400;
      throw error;
    }

    res.status(200).send(employeeDetails);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.updateEmployeePersonalDetails = async (req, res) => {
  try {
    const employeeDetails = await Employee.find({
      $and: [
        {
          _id: req.body.empId,
        },
        {
          eduatlasId: req.body.eduAtlasId,
        },
      ],
    });

    if (employeeDetails.length == 0) {
      const error = new Error('Employee not Found');
      error.statusCode = 400;
      throw error;
    }

    const updateEmployee = await Employee.updateOne(
      {
        _id: req.body.empId,
      },
      {
        basicDetails: req.body.basicDetails,
      }
    );
  } catch (error) {
    errorHandler(error, res);
  }
};

(exports.updateEmployeeInstituteDetails = async (req, res) => {
  try {
    const check = await Employee.find({
      $and: [
        {
          _id: req.body.empId,
        },
        {
          'instituteDetails.instituteId': req.body.instituteDetails.instituteId,
        },
      ],
    });

    if (check.length == 0) {
      const error = new Error('Employee not found');
      error.statusCode = 400;
      throw error;
    }

    const updateEmployee = await Employee.updateOne(
      {
        $and: [
          {
            _id: req.body.empId,
          },
          {
            'instituteDetails.instituteId': req.body.instituteDetails.instituteId,
          },
        ],
      },
      {
        $set: {
          instituteDetails: req.body.instituteDetails,
        },
      },
      {
        upsert: false,
      }
    );

    res.status(200).send(updateEmployee);
  } catch (error) {
    errorHandler(error, res);
  }
}),
  (exports.deleteEmployeeInstitute = async (req, res) => {
    try {
      const check = await Employee.find({
        $and: [
          {
            _id: req.body.empId,
          },
          {
            'instituteDetails.instituteId': req.body.instituteId,
          },
        ],
      });

      if (check.length == 0) {
        const error = new Error('Employee not found');
        error.statusCode = 400;
        throw error;
      }

      const updateEmployee = await Employee.updateOne(
        {
          _id: req.body.empId,
        },
        {
          $pull: {
            instituteDetails: {
              instituteId: req.body.instituteId,
            },
          },
        }
      );
      res.status(200).send(updateEmployee);
    } catch (error) {
      errorHandler(error, res);
    }
  });
