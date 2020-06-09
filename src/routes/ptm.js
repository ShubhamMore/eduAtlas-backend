const ptmRouter = require('express').Router()
const checkAuth = require('../middleware/checkAuth')
const ptmController = require('../controller/ptm')

ptmRouter('/addPtm',checkAuth, ptmController.addPtm)

ptmRouter('/getPtmByInstitute',checkAuth, ptmController.getPtmByInstitute)

ptmRouter('/getPtmByBatch',checkAuth, ptmController.getPtmByBatch)

ptmRouter('/getSinglePtm',checkAuth, ptmController.getSinglePtm)

ptmRouter('/updatePtm',checkAuth, ptmController.updatePtm)

ptmRouter('/deletePtm',checkAuth, ptmController.deletePtm)

module.exports = ptmRouter