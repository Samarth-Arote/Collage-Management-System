const db=require('../config/database');
createUser=(req,res)=>{
    let {username,password}=req.body;
    //let {file}=req.file;
    //let image=new Date().toISOString().replace(/:/g,'-')+'-'+req.file.originalname ;
    let sql='insert into login set ?';
    let body={username:username,password:password};
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
                msg:'user created... '
            });
        }
    });
};

module.exports={createUser};