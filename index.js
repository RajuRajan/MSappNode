const express = require('express');
const app =express();
const port ="8080";
const bodyParser=require('body-parser');
var jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
var cors = require('cors');
app.use(cors())

class Server{
    constructor(){
        this.init()
    }

    init(){
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
            app.post("/create",(req,res)=>{
                const {name ,mail}=req.body;
                console.log("name================",name)
                
                res.send({code:200 , data:{name:"vasu",email:"xx@mail.com"}})
            }      
            )

            app.post("/update",(req,res)=>{

            })
    }
}
const server = new Server();