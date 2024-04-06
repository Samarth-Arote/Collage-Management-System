const db=require('../config/database');
createContact=(req,res)=>{
    let {name,email,message}=req.body;
    //let {file}=req.file;
    //let image=new Date().toISOString().replace(/:/g,'-')+'-'+req.file.originalname ;
    let sql='insert into contact set ?';
    let body={name:name,email:email,message:message};
    db.query(sql,body,(err,result)=>{
        if(err)
        {
            console.log('error occured'+err);
            res.status(400).json({
                msg:'error occured'
            });
        }
        else
        {
            res.status(200).json({
                msg:'Thanks for responce.... '
            });
        }
    });
};

module.exports={createContact};