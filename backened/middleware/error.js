const ErrorHandler=require('../utils/errorhandler');

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.message=err.message || "Internal Server error";
  
    if(err.name=="CastError"){
        const message=`Resources not found . Invalid ${err.path}`;
        err=new ErrorHandler(message,400);
    }

    if(err.code==11000){
        const messsage=`Duplicate ${Object.keys(err.keyValue)} entered`;
        err=new ErrorHandler(messsage,404);
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}
