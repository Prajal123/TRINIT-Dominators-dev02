import {
    User_Login_Request,
    User_Login_Success,
    User_Login_Fail,
    User_Register_Fail,
    User_Register_Request,
    User_Register_Success,
    User_logout_Success,
    User_logout_Fail
  } from '../constants/userConstant';
import axios from 'axios';

  export const login=(email,password)=>async(dispatch)=>{
  try{
       dispatch({type:User_Login_Request});
      const config={ headers: {'Content-Type':'application/json'}};

      const { data} =await axios.post('api/v1/login',{ email,password},config);
      dispatch({ type:User_Login_Success,payload:data.user})
  }catch(err){
    dispatch({type:User_Login_Fail,payload:err.response.data.message});
  }
  }

  export const register=(name,email,password)=>async(dispatch)=>{
    try{
        dispatch({type:User_Register_Request});
       const config={ headers: {'Content-Type':'application/json'}};
 
       const { data} =await axios.post('api/v1/register',{name, email,password},config);
       dispatch({ type:User_Register_Success,payload:data.user})
   }catch(err){
     dispatch({type:User_Register_Fail,payload:err.response.data.message});
   }
  }

  export const logOut=()=>async(dispatch)=>{
    try{
 
    await axios.post('api/v1/logout');
       dispatch({ type:User_logout_Success});

   }catch(err){
     dispatch({type:User_logout_Fail,payload:err.response.data.message});
   }
  }