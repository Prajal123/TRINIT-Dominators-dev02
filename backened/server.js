const app=require('./app');

const dotenv=require('dotenv');
const connectToDB = require('./config/database');

process.on("uncaughtException",(err)=>{
   console.log(`Error:${err}`);
   console.log("Shutting down of the process due to uncaught exception");
})
dotenv.config({path:'backened/config/config.env'});
connectToDB();

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})

process.on("unhandledRejection",(err)=>{
 console.log(`Error:${err}`);
 console.log("Shutting down of the process due to unhandled promise rejection");

 server.close(()=>{
     process.exit(1);
 })
})