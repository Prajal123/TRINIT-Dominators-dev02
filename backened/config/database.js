const mongoose=require('mongoose');


const connectToDB=()=>{
mongoose.connect("mongodb://localhost:27017/Ecom3",{useUnifiedTopology:true,useNewURLParser:true}).then((data)=>{
    console.log(`Mongodb Connected to database : ${data.connection.host}`);
})

}

module.exports=connectToDB;