const sendToken=(user,statusCode,res)=>{

    const token =user.getJWTToken();

   const options={
       expires:new Date(Date.now()+process.env.Cookie_Expire*24*60*60*1000),
       httpOnly:true
   }
   res.status(statusCode).cookie("token",token,options).json({
       success:true,
       user,
       token,
       isAuth:true
   })
}

module.exports=sendToken;