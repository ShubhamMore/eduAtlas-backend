const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// student schema
const studentSchema = new Schema(
  {
    // basic details of student
    // eduatlasId:{
    //   type:String,
    //   required:true,
    //   unique:true
    // },
    eduAtlasId:{
      type:String,
    },

    basicDetails: new Schema(
      {
        name: {
          type: String,
          required: 'Name is required',
        },
        rollNumber: {
          type: String,
          required: 'Roll number is required',
        },
        studentEmail: {
          type: String,
          required: 'email is required',
          unique: true,
        },
        studentContact: {
          type: String,
          required: [true, 'student contact required'],
        },
      },
      { _id: false, toJSON: { getters: true }, toObject: { getters: true } }
    ),

    // student parent details
    parentDetails: new Schema(
      {
        name: {
          type: String,
          lowercase: true,
          default: '',
        },
        parentContact: {
          type: String,
          required: false,
        },
        parentEmail: {
          type: String,
          default: '',
        },
        address: {
          type: String,
          default: '',
        },
      },
      { _id: false, toJSON: { getters: true }, toObject: { getters: true } }
    ),
    instituteDetails:[
      {
        instituteId:{
          type:String,
          
        },
        courseId:{
          type:String,
          
        },
        batchId:{
          type:String,
          default:''
        },
        discount: {
          type: String,
          required: false,
        },
        additionalDiscount: {
          type: String,
          required: false,
        },
        nextPayble: {
          type: String,
          default: '',
        },
        active: {
          type: Boolean,
          default: false,
        },
        materialRecord: {
          type: String,
          default: null,
        },  
      }
    ], 
    
    // student fees
    fee:[{
          institudeId:{
            type:String,
          },
          courseId:{
            type:String
          },
          installmentNumber: {
            type: String,
            required: false,
        },
          nextInstallment: {
            type: String,
            required: false,
        },
          amountCollected: {
            type: String,
            required: false,
        },
          mode: {
            type: String,
            required: false,
        },
      }
    ],
    
    
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

// function parseNumber(value) {
//     if(value == '') {
//       return null
//     }
//     return parseInt(value);
//   }

//   function parseString(value) {
//     if(value == null) {
//         return '';
//     }
//     return value.toString();
// }

module.exports = mongoose.model('Student', studentSchema);
