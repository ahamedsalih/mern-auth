const express=require("express");

const router=express.Router();

const User=require("../models/userAuth");

const bcrypt=require("bcryptjs");

const jwt=require("jsonwebtoken");

const authMiddleware = require("../middleware/authMiddleware");

const JWT_SECRET=process.env.JWT_SECRET;



router.get("/protected",authMiddleware,(req,res)=>{
    res.send("hello")
  })
router.post("/signup",(req,res)=>{
    const {name,email,password}=req.body;
    if(!email || !password || !name ){
       return  res.status(422).json({error:"please fill all the fields"});
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"this email address already exits"});
        }

        bcrypt.hash(password,12)
        .then(hasedPassword=>{

            const user =new User({
                email,
                password:hasedPassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err=>{
            console.log(err)
        })
        })

       
    
    
})


router.post("/signin",(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password ){
        return res.status(422).json({error:"please fill all the fields"});
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"please put valid email or password"});
        }
        bcrypt.compare(password,savedUser.password)
        .then((doMatch)=>{
            if(doMatch){
               // return res.json({message:"successfully  signed in"});
               const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
               const {_id,name,email}=savedUser;
               res.json({token,user:{_id,name,email}})
            }else{

                return res.status(422).json({error:"invalid email or password"});
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})


module.exports = router;