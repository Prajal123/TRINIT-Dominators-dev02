const express=require('express');
const { createOrganization, addTeamMembers, getAllOrg, getOrg } = require('../controllers/orgController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router=express.Router();

router.route('/createOrg').post(isAuthenticatedUser,createOrganization);

router.route('/addMember/:id').post(isAuthenticatedUser,addTeamMembers);

router.route('/organisations').get(isAuthenticatedUser,getAllOrg);

router.route('/org/:id').get(isAuthenticatedUser,getOrg);
module.exports=router;
