const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const User = require('../model/user.model');
const EduAtlasId = require('../model/eduatlasId.model');
const Employee = require('../model/employee.model')

exports.addEmployee = async(req,res)=>{
    try {
        console.log(req.body)
        const user = await User.find({
          $or: [
            {
              'phone': req.body.basicDetails.employeeContact,
            },
            {
              'email': req.body.basicDetails.employeeEmail,
            },
          ],
        });
        console.log(user);
    
        if (user.length != 0) {
          console.log('length ', user.length);
          const error = new Error('User Already Exists');
          //error.prototype.statusCode = 400;
          throw error;
        }
        //EDU-2020-ST-000000
        const eduatlasId = await EduAtlasId.find({});
        //   console.log("ID", eduatlasId[0])
        var studentId = eduatlasId[0].empEduId.split('-');
        var d = new Date();
        var newEduAtlasId = 'EDU-' + d.getFullYear() + '-EMP-' + (parseInt(studentId[3]) + 1);
        console.log(newEduAtlasId);
    
        const newUser = {
          name: req.body.basicDetails.name,
          role: "employee",
          phone: req.body.basicDetails.employeeContact,
          email: req.body.basicDetails.employeeEmail,
          password: req.body.basicDetails.employeeContact,
          eduAtlasId: newEduAtlasId,
        };

        const addUser = new User(newUser);
        await addUser.save();
        console.log('ID', eduatlasId[0]._id);
    
        const newEmpolyee = {
          basicDetails: req.body.basicDetails,
          instituteDetails: req.body.instituteDetails,
          eduAtlasId: newEduAtlasId,
    
        };
        console.log(newEmpolyee);

        const addEmployee = new Employee(newEmpolyee);
        console.log(addEmployee);
        await addEmployee.save();
    
        console.log();
        await EduAtlasId.updateOne(
          { _id: eduatlasId[0]._id },
          {
            $set: {
              empEduId: newEduAtlasId,
            },
          }
        );
        res.status(200).send(addUser);
      } catch (error) {
        console.log(error);
        response(res, 500, error.message);
      }
}

exports.addEmployeeInstitute = async(req,res)=>{
  try {
    const check = await Employee.find({
      $and:[
        {
          _id:req.body.eduatlasId
        },
        {
          "instituteDetails.instituteId":req.body.instituteDetails.instituteId
        }
      ]
    })

    if(check.length!=0){
      console.log('length ', check.length);
      const error = new Error('Employee Already Exists');
      error.statusCode = 400;
      throw error;
    }
    
    const updateEmployee = await Employee.updateOne({
      eduAtlasId:req.body.eduAtlasId
    },{
      $push:{
        instituteDetails:req.body.instituteDetails
      }
    })
    
    res.status(200).json(updateEmployee);

  } catch (error) {
    errorHandler(error, res);
  }
}

exports.getEmployeeByEduatlasId = async(req,res) =>{
  try {
    const getEmployee = await Employee.find({
      eduAtlasId:req.body.eduAtlasId
    })

    if(getEmployee.length == 0) {
      const error = new Error('Wrong Employee Id')
    }
    res.status(200).send(getEmployee)
  } catch (error) {
    
  }
}
exports.getOneEmployeeByInstitute = async(req,res)=>{
  try {
    const getEmployee = await Employee.find({
      $and:[
        {
          _id:req.body.empId
        },
        {
          "instituteDetails.instituteId":req.body.instituteId
        }
      ]
    })
    
    if(getEmployee.length==0){
      console.log('length ', getEmployee.length);
      const error = new Error('Employee Not Found');
      error.statusCode = 400;
      throw error;
    }
    res.status(200).send(getEmployee)

  } catch (error) {

  errorHandler(error,res)   
  }
},

exports.getEmployeesByInstituteId = async(req,res) =>{
  try {
    const getEmployees = await Employee.find({
      "instituteDetails.instituteId":req.body.instituteId
    })

    if(getEmployees.length == 0){
      const error = new Error('Employees not Found')
      error.statusCode = 400
      throw error
    }

    res.status(200).send(getEmployees)

  } catch (error) {
    errorHandler(error,res)   

  }
}

exports.getEmployeePersonalDetails = async (req,res)=>{
  try {
    const employeeDetails = await Employee.find({
      $and:[{
        _id:req.body.empId,
      },{
        eduatlasId:req.body.eduAtlasId
      }]
    },{
      basicDetails:1
    })

    if(employeeDetails.length == 0){
      const error = new Error('Employee not Found')
      error.statusCode = 400
      throw error
    }

    res.status(200).send(employeeDetails)
  } catch (error) {
    errorHandler(error,res)
  }
}

exports.updateEmployeePersonalDetails = async (req,res)=>{
  try {
    const employeeDetails = await Employee.find({
      $and:[{
        _id:req.body.empId,
      },{
        eduatlasId:req.body.eduAtlasId
      }]
    })

    if(employeeDetails.length == 0){
      const error = new Error('Employee not Found')
      error.statusCode = 400
      throw error
    }


    const updateEmployee = await Employee.updateOne({
      _id:req.body.empId
    },
    {
      basicDetails:req.body.basicDetails
    })

    console.log(updateEmployee)
  } catch (error) {
    errorHandler(error,res)   
  }
}

exports.updateEmployeeInstituteDetails = async (req,res)=>{
  try {
    const check = await Employee.find({
      $and:[{
        _id:req.body.empId
      },{
        "instituteDetails.instituteId":req.body.instituteDetails.instituteId
      }
    ]
    })

    if(check.length == 0){
      const error = new Error("Employee not found")
      error.statusCode = 400
      throw error
    }

    const updateEmployee = await Employee.updateOne({
        $and:[{
          _id:req.body.empId
        },{
          "instituteDetails.instituteId":req.body.instituteDetails.instituteId
        }
      ]
    },{
      $set:{
        instituteDetails:req.body.instituteDetails
      }
    },{
      upsert:false
    })

    res.status(200).send(updateEmployee)
  } catch (error) {
    errorHandler(error,res)   

  }
},

exports.deleteEmployeeInstitute = async (req,res) =>{
  try {
    const check = await Employee.find({
      $and:[{
        _id:req.body.empId
      },{
        "instituteDetails.instituteId":req.body.instituteId
      }
    ]
  })

    if(check.length == 0){
      const error = new Error("Employee not found")
      error.statusCode = 400
      throw error
    }

    const updateEmployee = await Employee.updateOne({
      _id:req.body.empId
    },{
      $pull:{
        instituteDetails:{
          instituteId:req.body.instituteId
        }
      }
    })
    res.status(200).send(updateEmployee)

} catch (error) {
  errorHandler(error,res)    
  }
}