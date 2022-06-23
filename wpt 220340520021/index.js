const express = require("express");
const mysql= require("mysql2");

// create connection

const db= mysql.createConnection({
   
        host: 'localhost',
        user: 'root',
        password: 'cdac',
        database: 'exam',
        port:3306
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log ("connected");
});
const app=express();

// Update book

app.get("/updatebook/:id",(req,res)=>{

    let newName = "updated name";
    let sql=`UPDATED book SET name =${newName}'where id=${req.params.id}`;
    let query =db.query(sql,(err)=>{
        if(err){
            throw err;
        }
        res.send("Book updated")
    });
});