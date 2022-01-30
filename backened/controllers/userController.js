const ErrorHandler = require('../utils/errorhandler');
const User=require('../models/userModal');
const sendToken=require('../utils/jwtToken');
const catchAsyncError=require('../middleware/catchAsyncError');

exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const {name,email,password} = req.body;
   const user= await User.create({
        name,email,password,
        avatar:{
            public_id: "This is a sample image",
            url:"FoodFi"
        }
    })
   sendToken(user,200,res);
});

exports.loginUser=catchAsyncError(async(req,res,next)=>{
    const{email,password}=req.body;

    if(!email || !password){
        return next(new ErrorHandler("Please enter email or password",500));
    }

    const user=await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid user or password",404));
    }
    const passwordMatch=user.comparePassword(password);
    if(!passwordMatch){
        return next(new ErrorHandler("Invalid user or password",404));
    }

    sendToken(user,200,res);
});

exports.logoutUser=catchAsyncError(async(req,res,next)=>{
   res.cookie("token",null,{
       expires:new Date(Date.now()),
       httpOnly:true
   })

   res.status(200).json({
       success:true,
       message:"Logged Out"
   })
});

exports.getAllUsers=catchAsyncError(async(req,res,next)=>{
    const users=await User.find();

    res.status(200).json({
        success:true,
        users
    })
})


