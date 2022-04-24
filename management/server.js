const fs = require("fs");
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();

const port=process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); 
const data=fs.readFileSync('./database.json');
const conf=JSON.parse(data);
const mysql=require('mysql');
const connection=mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
});
connection.connect();


app.get('/api/customers',(req,res)=>{
    connection.query(
        "SELECT * FROM CUSTOMER WHERE isDeleted=0",
        (err, rows, fields)=>{
            res.send(rows);
        }
    )
})
app.post('/api/customers', (req,res)=>{
    let sql=`INSERT INTO CUSTOMER VALUE (null, ?, ?, ?, ?,now() ,0)`;
    let name=req.body.name;
    let birthday=req.body.birthday;
    let male=req.body.male;
    let job=req.body.job;
    console.log(req.body);
    let params=[name, birthday, male, job];
    connection.query(sql, params, (err,rows, fields)=>{
         res.send(rows);
    })
})
app.delete('/api/customers/:id', (req, res)=>{
    let sql='UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?'
    let params=[req.params.id];
    connection.query(sql, params, (err, rows, fields)=>{
        res.send(rows);
    })
})


app.listen(port, ()=> console.log(`Listening on port ${port}`));