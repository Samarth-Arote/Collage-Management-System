let express=require('express');
let router=express.Router();
let {createContact}=require('../function/contact');
router.post('/add',(req,res)=>{
    createContact(req,res);
});
module.exports={createContact};