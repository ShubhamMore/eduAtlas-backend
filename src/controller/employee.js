const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const Student = require('../model/student.model');
const User = require('../model/user.model');
const userController = require('../controller/users');
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