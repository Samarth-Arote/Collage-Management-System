let express=require('express');
let router=express.Router();
let {createDiploma}=require('../function/diploma');
router.post('/add',(req,res)=>{
    createDiploma(req,res);
});
module.exports={createDiploma};