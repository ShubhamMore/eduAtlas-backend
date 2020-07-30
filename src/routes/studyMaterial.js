const studyMaterialRouter = require('express').Router();
const studyMaterialController = require('../controller/studyMaterial');
const file = require('../middleware/studyMaterialFile');
const checkAuth = require('../middleware/checkAuth');
const checkStorage = require('../middleware/checkStorageSize');

studyMaterialRouter.post(
  '/addStudyMaterial',
  checkAuth,
  file,
  checkStorage,
  studyMaterialController.addStudyMaterial
);

studyMaterialRouter.post(
  '/editStudyMaterial',
  checkAuth,
  file,
  checkStorage,
  studyMaterialController.editStudyMaterial
);

studyMaterialRouter.post(
  '/getSingleStudyMaterial',
  checkAuth,
  studyMaterialController.getSingleStudyMaterial
);

studyMaterialRouter.post(
  '/getStudyMaterialForStudent',
  checkAuth,
  studyMaterialController.getStudyMaterialForStudent
);

studyMaterialRouter.post('/getStudyMaterial', checkAuth, studyMaterialController.getStudyMaterial);

studyMaterialRouter.post(
  '/deleteStudyMaterial',
  checkAuth,
  studyMaterialController.deleteStudyMaterial
);

module.exports = studyMaterialRouter;
