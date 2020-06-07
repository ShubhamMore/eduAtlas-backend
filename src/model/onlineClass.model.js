const mongoose = require('mongoose');

const onlineClassSchema = new mongoose.Schema({
    meetingId:{
        type:String
    },
    joinUrl:{
        type:String
    },
    startUrl:{
        type:String
    },
    batchId:{
        type:String
    },
    courseId:{
        type:String
    },
    topic:{
        type:String
    },
    teacherId:{
        type:String
    }
})

const OnlineClass = mongoose.model('onlineclass',onlineClassSchema)

module.exports = OnlineClass