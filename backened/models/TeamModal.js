const mongoose=require('mongoose');

const OrganisationSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter organisation name"]
    },
    admin:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
            required:true
    },
    members:[
        {
            userId:{
                type:mongoose.Schema.ObjectId,
                ref:"user",
                required:true
            }
        }
    ]
})

module.exports= mongoose.model("organization",OrganisationSchema);