const catchAsyncError = require('../middleware/catchAsyncError');
const organisation=require('../models/TeamModal');

exports.createOrganization=catchAsyncError(async(req,res,next)=>{
    const {orgName}=req.body;
    const org=await organisation.create({
        name:orgName,
        admin:req.user.id
    })
    res.status(200).json({
        success:true,
        org
    })
})

exports.addTeamMembers=catchAsyncError(async(req,res,next)=>{
    const team=await organisation.findById(req.params.id);


    console.log(team);
    const { id } =req.body;
    
    const member=team.members.filter((member)=>{return member.userId==id});

    if(member.length==0){
  team.members.push({userId:id});
        console.log(team);
        await team.save({useValidatorBeforeSave:false});
    }


    res.status(200).json({
        success:true,
        team
    })

})

exports.getAllOrg=catchAsyncError(async(req,res,next)=>{
    const orgs=await organisation.find();

    res.status(200).json({
        success:true,
       orgs
    })
})

exports.getOrg=()=>catchAsyncError(async(req,res,next)=>{
    const org=await organisation.find(req.params.id);
    res.status(200).json({
        success:true,
        org
    })
})