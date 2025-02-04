import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import compression from "compression";

const app=express();
const port=process.env.PORT || 3000;
const todo_list=[];
const wish_list=[];
const date=new Date().getDate();
const month=new Date().getMonth();
const year=new Date().getFullYear();
const fulldate=date+"-"+month+"-"+year;

app.use(helmet());
app.use(compression());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.listen(port,()=>{
    
    console.log(`Listening to port ${port}!`);
    
})

app.post("/submitTodo",(req,res)=>{
    const newItem=req.body["newListItem"];
    todo_list.push(newItem);
    res.render("index.ejs",{todo:todo_list,fulldate});
    
})

app.post("/submitWish",(req,res)=>{
    const newItem=req.body["newListItem"];
    wish_list.push(newItem); 
    res.render("wish.ejs",{wish:wish_list});
})

 

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{todo:todo_list,fulldate});
})

app.get("/wish",(req,res)=>{
    res.render("wish.ejs",{wish:wish_list});
})

