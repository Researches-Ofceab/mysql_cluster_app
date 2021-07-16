const mysql = require('mysql2');

const express =require('express');


//Create app
const app=express();


const connection = mysql.createConnection({
    host: '192.168.0.2',
    user: 'root',
    password:'root',
    database: 'Dictionary'
  });
  

app.get('/search:keyword',(res,req)=>{
    
});



app.listen(3000,()=>console.log("The server is running on port : 3000"));
