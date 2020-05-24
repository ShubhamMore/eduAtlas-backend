const employeeRouter = require('express').Router({ caseSensitive: true });

const employeeController = require('../controller/employee')

employeeRouter.post('/add', employeeController.addEmployee)
module.exports = employeeRouter
