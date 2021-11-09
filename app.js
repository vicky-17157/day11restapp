const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
  
const customersRoute= require('./routes/customers'); 
app.use('/customers',customersRoute); 

mongoose.connect("mongodb://localhost:27017/myowndb",() =>{
     console.log("Connected to DB");
});

app.listen(8080);