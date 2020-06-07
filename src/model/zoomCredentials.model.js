const mongoose = require('mongoose')

const ZoomUserSchema = new mongoose.Schema({
    
    userId:{
        type:String
    },
    client_id:{
        type:String
    },
    client_secret_id:{
        type:String
    },
    access_token:{
        type:String
    },
    refresh_token:{
        type:String
    },
    expiresIn:{
        type:Number
    }

})

const ZoomUser = mongoose.model('zoomuser',ZoomUserSchema)
module.exports = ZoomUser