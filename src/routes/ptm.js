const ptmRouter = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const ptmController = require('../controller/ptm');

ptmRouter.post('/addPtm', checkAuth, ptmController.addPtm);

ptmRouter.post('/getPtmByInstitute', checkAuth, ptmController.getPtmByInstitute);

ptmRouter.post('/getPtmByBatch', checkAuth, ptmController.getPtmByBatch);

ptmRouter.post('/getSinglePtm', checkAuth, ptmController.getSinglePtm);

ptmRouter.post('/updatePtm', checkAuth, ptmController.updatePtm);

ptmRouter.post('/deletePtm', checkAuth, ptmController.deletePtm);

ptmRouter.post('/getPtmOfInstitutes', checkAuth, ptmController.getPtmOfInstitutes);

module.exports = ptmRouter;
