const jwt=require('jsonwebtoken');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncError = require('./catchAsyncError');
const User=require('../models/userModal');

exports.isAuthenticatedUser=catchAsyncError(async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return next(new ErrorHandler("Please login first to see the items",404));
    }

    const decodedData=jwt.verify(token,process.env.JWT_SECRET);
 
   req.user=await User.findById(decodedData.id);
  
   next();
})

