const employeeRouter = require('express').Router({ caseSensitive: true });


const employeeController = require('../controller/employee')

//to Add new Employee
employeeRouter.post('/addEmployee', employeeController.addEmployee)

//to Add institute to Employee
employeeRouter.post('/addEmployeeInstitute',employeeController.addEmployeeInstitute)

//To get one Employee by EmpID and InstituteID
employeeRouter.post('/getOneEmployeeByInstitute',employeeController.getOneEmployeeByInstitute)

//
employeeRouter.post('/getEmployeesByInstituteId',employeeController.getEmployeesByInstituteId)

employeeRouter.post('/getEmployeePersonalDetails',employeeController.getEmployeePersonalDetails)

employeeRouter.post('/updateEmployeePersonalDetails',employeeController.updateEmployeePersonalDetails)

employeeRouter.post('/updateEmployeeInstituteDetails',employeeController.updateEmployeeInstituteDetails)

employeeRouter.post('/deleteEmployeeInstitute',employeeController.deleteEmployeeInstitute)

employeeRouter.post('/getEmployeeByEduatlasId',employeeController.getEmployeeByEduatlasId)

module.exports = employeeRouter
