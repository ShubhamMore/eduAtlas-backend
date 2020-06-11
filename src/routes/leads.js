const leadRouter = require('express').Router()
const checkAuth = require('../middleware/checkAuth')
const leadController = require('../controller/leads')

leadRouter.post('/addLead',leadController.addLead )
leadRouter.post('/getLeadsByOfInstitute',leadController.getLeadsByOfInstitute )
leadRouter.post('/getSingleLead',leadController.getSingleLead )
leadRouter.post('/updateLead',leadController.updateLead )
leadRouter.post('/deleteLead',leadController.deleteLead )

module.exports = leadRouter