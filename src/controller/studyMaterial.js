const StudyMaterial = require('../model/studyMaterial.model');
const fs = require('fs');
const path = require('path');

const deleteFile = (filePath) => {
  fs.unlink(path.join(__dirname + '../../../' + filePath), (error) => {
    if (error) {
      console.log(error);
      const err = new Error('Error while deleting the image');
      err.statusCode = 500;
      throw err;
    }
    console.log('File Deleted successfully');
  });
};

exports.addStudyMaterial = async (req, res) => {
  try {
    let materialFile = null;
    if (req.file !== undefined) {
      const fileURL = {
        filePath: req.file.path,
        fileName: `${req.file.filename.substring(
          0,
          req.file.filename.lastIndexOf('-')
        )}.${req.file.filename.substring(req.file.filename.lastIndexOf('.') + 1)}`,
      };
      materialFile = {
        file_name: fileURL.fileName,
        secure_url: process.env.SERVER + fileURL.filePath,
        public_id: fileURL.filePath,
        created_at: Date.now(),
      };
    } else {
      materialFile = {
        file_name: req.body.title,
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
    res.status(201).json(studyMaterial);
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};

exports.editStudyMaterial = async (req, res) => {
  try {
    let oldStudyMaterial = await StudyMaterial.findById(req.body._id);

    let materialFile = oldStudyMaterial.file;

    if (req.file !== undefined) {
      const fileURL = {
        filePath: req.file.path,
        fileName: `${req.file.filename.substring(
          0,
          req.file.filename.lastIndexOf('-')
        )}.${req.file.filename.substring(req.file.filename.lastIndexOf('.') + 1)}`,
      };
      console.log('11');
      if (materialFile.public_id && oldStudyMaterial.category !== 'LEARNING VIDEO') {
        deleteFile(materialFile.public_id);
      }

      materialFile = {
        file_name: fileURL.fileName,
        secure_url: process.env.SERVER + fileURL.filePath,
        public_id: fileURL.filePath,
        created_at: Date.now(),
      };
    } else {
      if (req.body.category === 'LEARNING VIDEO') {
        if (oldStudyMaterial.category !== 'LEARNING VIDEO' && materialFile.public_id) {
          deleteFile(materialFile.public_id);
        }

        materialFile = {
          file_name: req.body.title,
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

    res.status(201).json(updatedInstitute);
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};

exports.getStudyMaterial = async (req, res, next) => {
  try {
    const query = { instituteId: req.body.instituteId };

    if (req.body.courseId) {
      query.courseId = { $in: [req.body.courseId] };
    }

    console.log(query);

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

    console.log(query);

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
    const material = await StudyMaterial.findByIdAndDelete(req.body._id);
    if (material.category !== 'LEARNING VIDEO') {
      console.log('cc');
      deleteFile(material.file.public_url);
    }
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    errorHandler(error, res);
  }
};
