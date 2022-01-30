import React, { useEffect, useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../App.css'
import {useDispatch,useSelector} from 'react-redux';
import { login } from '../actions/userAction';
import {useAlert} from 'react-alert'; 


export const LoginPage = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    const { loading ,error,user} = useSelector((state)=>state.user);

    console.log(user);
    const [loginEmail,setLoginEmail]=useState('');
    const [loginPassword,setLoginPassword]=useState('');

    const loginSubmit=(e)=>{
        e.preventDefault();
        dispatch(login(loginEmail,loginPassword));
    }
    useEffect(()=>{
     
        if(Object.keys(user).length){
           navigate('/home');
        }

    },[history,user]);
  return (
  <>
  <section>
      <div className="box">
          <div className="login-container">
              <div className="form">
                  <form action="/home" onSubmit={loginSubmit}>
                  <h1>LOGIN</h1>
           <div>
               <label>Email</label>
               <input type="email" name="email" placeholder="Enter your email here" required onChange={(e)=>{setLoginEmail(e.target.value)}}/>
           </div>
           <div>
               <label>Password</label>
               <input type="password" name="password" placeholder="Enter your password here" required  onChange={(e)=>{setLoginPassword(e.target.value)}}/>
           </div>
           <input type="submit" name="login" value="LOGIN" />
                  </form>
                  <p>Don't have an account<Link to="/register">Create an account</Link></p>
              </div>
          </div>
          </div>
</section>
        </>
        );
};
