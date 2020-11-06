const express=require("express");

const app=express();

const PORT=5000;

require("dotenv").config();



const mongoose=require("mongoose");



mongoose.connect(process.env.MONGOURI,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("db connected")
}).catch(err=>{
  console.log("db disconnected")
});

app.use(express.json())

//Router

app.use(require("./routers/userRouter"));

app.use(require("./routers/forgotRouter"))




app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})