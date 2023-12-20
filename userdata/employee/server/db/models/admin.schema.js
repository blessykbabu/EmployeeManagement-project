// import mongoose from "mongoose";

// const schema = new mongoose.Schema({
   
//     email: {
//         type: String,
//         required: true,
       
//     },
  
//     password: {
//         type: String,
//         required: true,
        
//     },
// }
// );

// export default mongoose.model.admins || mongoose.model("admin", schema);
const mongoose=require('mongoose');

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
});

module.exports= mongoose.model.admins || mongoose.model("admin", schema);
