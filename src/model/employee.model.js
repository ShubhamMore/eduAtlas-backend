const mongoose = require('mongoose');   
const Schema = mongoose.Schema;

const employeeSchema = new Schema ({
    eduAtlasId:{
        type:String
    },
    basicDetails: new Schema(
        {
          name: {
                type: String,
                required: 'Name is required',
          },
          employeeEmail: {
                type: String,
                required: 'email is required',
                unique: true,
            },
          employeeContact: {
                type: String,
                required: [true, 'student contact required'],
            },
          employeeAddress:{
                type:String
            }
    
        },
            { _id: false, toJSON: { getters: true }, toObject: { getters: true } }
    ),
    instituteDetails:[
        
        {
          instituteId:{
            type:String,
            unique:true
            
          },
          courseId:{
            type:String,
            
          },
          batchId:{
            type:String,
            default:''
          },
          role:{
              type:String
          }
        }
    ]
    
})

module.exports = mongoose.model('Employee', employeeSchema)