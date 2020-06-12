
const mongoose = require('mongoose')
const { date } = require('@hapi/joi')

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
        type:Date,
        default:Date.now()
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
        commentDate:{
            type:Date,
            default:Date.now()
        }
    }]
})

const Forum = mongoose.model('forum',forumSchema)

module.exports = Forum