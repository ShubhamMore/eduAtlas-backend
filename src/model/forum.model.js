const mongoose = require('mongoose')

const forumSchema = new mongoose.Schema({
    
    instituteId:{
        type:String,
        required:true
    },
    courseId:{
        type:String
    },
    createdBy:{
        type:String
    },
    createdByName:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:String
    },
    uploadTime:{
        type:String
    },
    comments:[{
        userId:{
            type:String
        },
        userName:{
            type:String,
        },
        comment:{
            type:String
        },
        commentTime:{
            type:String
        },
        commentDate:{
            type:String
        }
    }]
})

const Forum = mongoose.model('forum',forumSchema)

module.exports = Forum