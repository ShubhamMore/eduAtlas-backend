const Announcement = require('../model/announcement.model');
const errorHandler = require('../service/errorHandler');

exports.makeAnnouncement = async (req, res) => {
    console.log(req.body);
    try {
    
        const fileURL = {
            filePath: req.file.path,
            fileName: `${req.file.filename.substring(
              0,
              req.file.filename.lastIndexOf('-')
            )}.${req.file.filename.substring(req.file.filename.lastIndexOf('.') + 1)}`,
    };  

    const attachment = {
        image_name: fileURL.fileName,
        secure_url: process.env.SERVER + fileURL.filePath,
        public_id: fileURL.filePath,
        created_at: Date.now(),
      };

      req.body.attachment = attachment

      const announcement = new Announcement(req.body);
      await announcement.save();
      res.status(201).json(announcement);
    } catch (error) {
      console.log(error);
      response(res, error.statusCode || 500, error.message);
    }
};

exports.getAnnouncement = async (req, res, next) => {
    try {
        const instituteId = req.body.instituteId;
        const announcements = await Announcement.find({ instituteId });
        res.status(200).json(announcements);        
    } catch (error) {
        errorHandler(error,res)
    }   
};
  
  exports.deleteAnnouncement = async (req, res, next) => {
    try {
        
        await Announcement.deleteOne({ 
            _id:req.body._id 
        });
        res.status(200).json({ message: 'Deleted successfully' });    
    } catch (error) {
        errorHandler(error,res)
    }  
    
};


  