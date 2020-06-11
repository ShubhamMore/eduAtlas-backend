const mongoose = require('mongoose')

const leadsSchema = new mongoose.Schema({
    leadName:{
        type:String
    },
    leadContact:{
        type:String
    },
    leadEmail:{
        type:String
    },
    instituteId:{
        type:String
    },
    courseId:{
        type:String
    },
    status:{
        type:String
    },
    addedDate:{
        type:String
    },
    note:{
        type:String
    }
})

const Leads = mongoose.model("lead",leadsSchema)
module.exports = Leads