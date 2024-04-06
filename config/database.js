const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'collage'
});

db.connect((err)=>{
    if(err)
    {
        console.log(`error :- ${err}`);
    }
    else
    {
        console.log('db connected');
    }
});

 module.exports=db;