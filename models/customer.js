const mongoose = require('mongoose'); 
 
const customerSchema= mongoose.Schema({
     name:{
          firstname:{
               type:String,
               required:true},
          lastname:{
               type:String,
               required:true}     
          
     },
     location:{
          locationname:{
               type:String,
               required:true},
          zipcode:{
               type:String,
               required:true},
          cityname:{
               type:String,
               required:true},
          statename:{
               type:String,
               required:true},               
           
},
     email:{
          type:String,
          required:true
     }
            
             
});



 module.exports=mongoose.model('Customer',customerSchema); 