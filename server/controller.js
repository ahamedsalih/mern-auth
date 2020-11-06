const express=require("express");

const router=express.Router();

const User=require("./models/userAuth");



exports.userById=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            res.status(400).json({
                err:"try again"
            })
        }
        req.profile=user;
        next()
    })
}

