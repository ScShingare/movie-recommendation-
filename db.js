let dotenv=require("dotenv");
    dotenv.config();

let mysql=require("mysql2");

let conn=mysql.createConnection({
 host:process.env.DB_HOST,
 user:process.env.DB_USERNAME,
 password:process.env.DB_PASSWORD,
 database:process.env.DB_NAME
});

conn.connect((err)=>{
  if(err){
    console.log("some problem :"+err);
  }else{
    console.log("database is connected....");
  }
});

module.exports=conn;