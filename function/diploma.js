const db=require('../config/database');
createDiploma=(req,res) => {
    let {course , fees , result , name , address}= req.body;
    //let image=new Date().toISOString().replace(/:/g,'-')+'-'+req.file.originalname ;
    let sql = 'insert into diploma set ?';
    let body = {course:course,fees:fees,result:result,name:name ,address:address};
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
                msg:'diploma is created created'
            });
        }
    });
};

module.exports={createDiploma};
