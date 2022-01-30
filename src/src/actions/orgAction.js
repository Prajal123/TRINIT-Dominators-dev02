import {
    All_Org_Fail,
    All_Org_Success,
    All_Org_Requests,
    Create_Org_Request,
    Create_Org_Success,
    Create_Org_Fail,
    Add_User_Request,
    Add_User_Success,
    Add_User_Fail,
    Get_Org_Requests,
    Get_Org_Succcess,
    Get_Org_Fail
} from '../constants/orgConstants';

export const getAllOrgs=()=>async(dispatch)=>{
    try{
        dispatch({type:All_Org_Requests});
       const config={ headers: {'Content-Type':'application/json'}};
 
       const { data} =await axios.get('api/v1/organisations');
       dispatch({ type:All_Org_Success,payload:data.orgs});
   }catch(err){
     dispatch({type:All_Org_Fail,payload:err.response.data.message});
   }
  }

  export const createOrg=(name,admin)=>async(dispatch)=>{
    try{
        dispatch({type: Create_Org_Request});
       const config={ headers: {'Content-Type':'application/json'}};
 
       const { data} =await axios.post('api/v1/createOrg',{name,admin},config);

       dispatch({ type: Create_Org_Success,payload:data.orgs});
   }catch(err){
     dispatch({type:Create_Org_Fail,payload:err.response.data.message});
   }

  }

  export const addUser=(id)=>async(dispatch)=>{
    try{
        dispatch({type: Add_User_Request});
       const config={ headers: {'Content-Type':'application/json'}};
 
       const { data} =await axios.post(`api/v1/addmember/${id}`,{id},config);

       dispatch({ type: Add_User_Success,payload:data.orgs});
   }catch(err){
     dispatch({type:Add_User_Fail,payload:err.response.data.message});
   }
  }

  export const getSingleOrg=(id)=>async(dispatch)=>{
    try{
        dispatch({type: Get_Org_Requests});
 
       const { data} =await axios.get(`api/v1/org/${id}`);

       dispatch({ type: Get_Org_Succcess,payload:data.orgs});
   }catch(err){
     dispatch({type:Get_Org_Fail,payload:err.response.data.message});
   }
  }
