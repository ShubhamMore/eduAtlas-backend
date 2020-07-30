const StudyMaterial = require('../model/studyMaterial.model');
const Institute = require('../model/institute.model');
const awsUploadFile = require('../functions/awsUploadFile');
const awsRemoveFile = require('../functions/awsRemoveFile');
const errorHandler = require('../service/errorHandler');

exports.addStudyMaterial = async (req, res) => {
  try {
    const institute = await Institute.findById(req.body.instituteId);
    let storageUsed = +institute.storageUsed;

    let materialFile = null;
    if (req.file !== undefined) {
      let filePath = req.file.path;
      let fileName = req.file.filename;
      let fileSize = req.file.size;

      const cloudDirectory = req.body.instituteId + '/study-materials';
      const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

      const upload_res = uploadResponce.upload_res;

      materialFile = {
        file_name: upload_res.key
          .split('/')[2]
          .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
          .split('-')
          .join(' ')
          .toUpperCase(),
        file_size: fileSize,
        secure_url: upload_res.Location,
        public_id: upload_res.key,
        created_at: Date.now(),
      };
    } else {
      materialFile = {
        file_name: req.body.title,
        file_size: null,
        secure_url: req.body.link,
        public_id: req.body.link,
        created_at: Date.now(),
      };
    }

    const studyMaterialData = {
      instituteId: req.body.instituteId,
      courseId: JSON.parse(req.body.courseId),
      title: req.body.title,
      category: req.body.category,
      file: materialFile,
      batches: JSON.parse(req.body.batches),
    };

    const studyMaterial = new StudyMaterial(studyMaterialData);
    await studyMaterial.save();

    storageUsed = storageUsed + materialFile.file_size;
    await Institute.findByIdAndUpdate(institute._id, { storageUsed });

    res.status(201).json(studyMaterial);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.editStudyMaterial = async (req, res) => {
  try {
    const institute = await Institute.findById(req.body.instituteId);
    let storageUsed = +institute.storageUsed;

    let oldStudyMaterial = await StudyMaterial.findById(req.body._id);

    let materialFile = oldStudyMaterial.file;

    if (req.file !== undefined) {
      let filePath = req.file.path;
      let fileName = req.file.filename;
      let fileSize = req.file.size;

      const cloudDirectory = req.body.instituteId + '/study-materials';
      const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

      const upload_res = uploadResponce.upload_res;

      if (materialFile.public_id && oldStudyMaterial.category !== 'LEARNING VIDEO') {
        await awsRemoveFile(materialFile.public_id);
        if (materialFile.file_size) {
          storageUsed = storageUsed - +materialFile.file_size;
        }
      }

      materialFile = {
        file_name: upload_res.key
          .split('/')[2]
          .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
          .split('-')
          .join(' ')
          .toUpperCase(),
        file_size: fileSize,
        secure_url: upload_res.Location,
        public_id: upload_res.key,
        created_at: Date.now(),
      };
    } else {
      if (req.body.category === 'LEARNING VIDEO') {
        if (oldStudyMaterial.category !== 'LEARNING VIDEO' && materialFile.public_id) {
          await awsRemoveFile(materialFile.public_id);
          if (materialFile.file_size) {
            storageUsed = storageUsed - +materialFile.file_size;
          }
        }

        materialFile = {
          file_name: req.body.title,
          file_size: null,
          secure_url: req.body.link,
          public_id: req.body.link,
          created_at: Date.now(),
        };
      }
    }

    const studyMaterialData = {
      instituteId: req.body.instituteId,
      courseId: JSON.parse(req.body.courseId),
      title: req.body.title,
      category: req.body.category,
      file: materialFile,
      batches: JSON.parse(req.body.batches),
    };

    const updatedInstitute = await StudyMaterial.findByIdAndUpdate(req.body._id, studyMaterialData);

    storageUsed = storageUsed + materialFile.file_size;
    await Institute.findByIdAndUpdate(institute._id, { storageUsed });

    res.status(201).json(updatedInstitute);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getStudyMaterial = async (req, res, next) => {
  try {
    const query = { instituteId: req.body.instituteId };

    if (req.body.courseId) {
      query.courseId = { $in: [req.body.courseId] };
    }

    const studyMaterials = await StudyMaterial.find(query);

    res.status(200).json(studyMaterials);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getStudyMaterialForStudent = async (req, res, next) => {
  try {
    const query = { instituteId: req.body.instituteId };

    if (req.body.batch) {
      query.batches = { $in: [req.body.batch] };
    }

    const studyMaterials = await StudyMaterial.find(query);

    res.status(200).json(studyMaterials);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getSingleStudyMaterial = async (req, res, next) => {
  try {
    const _id = req.body.id;
    const studyMaterial = await StudyMaterial.findById(_id);
    if (!studyMaterial) {
      throw new Error('StudyMaterial Not Found');
    }
    res.status(200).json(StudyMaterial);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.deleteStudyMaterial = async (req, res, next) => {
  try {
    const institute = await Institute.findById(req.body.instituteId);
    let storageUsed = +institute.storageUsed;

    const material = await StudyMaterial.findByIdAndDelete(req.body._id);
    if (material.category !== 'LEARNING VIDEO') {
      await awsRemoveFile(material.file.public_id);
      if (material.file.file_size) {
        console.log(storageUsed);
        storageUsed = storageUsed - +material.file.file_size;
        console.log(storageUsed);
      }
    }

    await Institute.findByIdAndUpdate(institute._id, { storageUsed });

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};
