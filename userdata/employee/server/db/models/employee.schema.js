// // import mongoose from "mongoose";
// const mongoose=require('mongoose');
// const schema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
        
//     },
//     email: {
//         type: String,
//         required: true,
       
//     },
  
//     phone: {
//         type: String,
//         required: true
//     },

     

//     district:{
//       type:String
//   },



// role:{
//   type:String
// },



// jdate:{
//   type:String
// },


// deleted:{
//   type:Boolean,
//   default:false, 
// },
// deletedAt:{
//   type:Date
// }
// },{
//   timestamps:true
// });

// module.exports= mongoose.model.employees || mongoose.model("employee", schema);
const mongoose = require('mongoose');

let employees;

try {
  // Try to retrieve the existing model to prevent redefining it
  employees = mongoose.model('employees');
} catch {
  // Define the model if it doesn't exist
  const schema = new mongoose.Schema({
    name: {
              type: String,
              required: true,
              
          },
          email: {
              type: String,
              required: true,
             
          },
        
          phone: {
              type: String,
              required: true
          },
      
           
      
          district:{
            type:String
        },
      
      
      
      role:{
        type:String
      },
      
      
      
      jdate:{
        type:String
      },
      
      
      deleted:{
        type:Boolean,
        default:false, 
      },
      deletedAt:{
        type:Date
      }
      },{
        timestamps:true
  }, {
    timestamps: true,
  });

  employees = mongoose.model('employees', schema);
}

module.exports = employees;
