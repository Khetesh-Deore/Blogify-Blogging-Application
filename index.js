const {config} =require('dotenv');
config();
const express=require("express")
const path=require("path")
const userRoute=require('./routes/user')
const app=express();

app.set("view engine","ejs")
app.set("views",path.resolve('./views'))


app.get('/',(req,res)=>{
	res.render('home')
});

app.use("/user",userRoute)

app.listen(process.env.PORT,()=>console.log(`Server Started at PORT :${process.env.PORT}`))