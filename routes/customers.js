const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

//getting all the datas
router.get('/', async(req,res) =>{
     try{
         const customer = await Customer.find();
         res.json(customer);
        }
        catch (err){
            res.json({message:err});
        }
});


// getting a post by id

router.get('/:customerid', async(req,res) =>{
     try{
          const customer = await Customer.findById(req.params.customerid);
           res.json(customer);
         }
         catch(err){
              res.json({message:err});
          }
});     

 // creating a post

router.post('/',(req,res)=>{
     const customer =new Customer({
          name:{firstname:req.body.name.firstname,lastname:req.body.name.lastname},
          location:{locationname:req.body.location.locationname,zipcode:req.body.location.zipcode,cityname:req.body.location.cityname,
                    statename:req.body.location.statename},
          email:req.body.email
     });
         customer.save().
         then(data =>{
             res.json(data);
          }).catch (err=>{
               res.json({message:err});
     })
});

// deleting a post

router.delete('/:customerid', async(req,res) =>{
     try{
           const removepost = await Customer.deleteOne({_id: req.params.customerid});
           res.json(removepost);
     }
     catch(err){
          res.json({message:err});
     }
});

// updating a post by id

router.patch('/:customerid', async(req,res) =>{
     try{
          const customer = await Customer.findOne({_id: req.params.customerid});
          if(req.body.name){
                if(req.body.name.firstname){
                     customer.name.firstname=req.body.name.firstname;
                    }
                if(req.body.name.lastname){
                    customer.name.lastname=req.body.name.lastname;
               }  
               }
          if(req.body.location){
               if(req.body.location.locationname){
                    customer.location.locationname=req.body.location.locationname;
               }
               if(req.body.location.zipcode){
                    customer.location.zipcode=req.body.location.zipcode;
               }
               if(req.body.location.cityname){
                    customer.location.cityname=req.body.location.cityname;
               }
               if(req.body.location.statename){
                    customer.location.statename=req.body.location.statename;
               }
          }
          if(req.body.email){
               customer.email=req.body.email;
          }
          await customer.save();
           res.json(customer);
          }
          catch(err){
          res.json({message:err});
         }
});






module.exports= router;