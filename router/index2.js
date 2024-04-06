let express=require('express');
let router=express.Router();
let db=require('../config/database');


  /*router.get('/', (req, res) => {
   res.render('home');
 });
*/

router.get('/diploma',(req,res)=>{
    let sql='select * from diploma';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            res.render('diploma',{diplomas:result});
        }
        else
        {
            console.log('error occured')
        }
    });
    
});
module.exports=router;