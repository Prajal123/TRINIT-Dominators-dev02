import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../actions/userAction';

export const RegisterPage = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { user}= useSelector((state)=>state.user);

     const registerSubmit=(e)=>{
        e.preventDefault();
        dispatch(register(name,email,password));
     }
       console.log(user);
     useEffect(()=>{
       
        if(Object.keys(user).length){
           navigate('/home');
        }
     },[user]);
  return (
  <>
  <section>
      <div className="box">
          <div className="login-container">
              <div className="form" onSubmit={registerSubmit}>
                  <form action="/home">
                      <h1>Create your Account!</h1>
                    <div>
                    <label>Username</label>
               <input type="text" name="username" placeholder="Enter your username here" required onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div>
                    <label>Email</label>
               <input type="email" name="email" placeholder="Enter your email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
               <label>Password</label>
               <input type="password" name="password" placeholder="Enter your password here" required  onChange={(e)=>{setPassword(e.target.value)}}/>
           </div>
           <input type="submit" name="create" value="Submit" />
                  </form>
                  <p><Link to="/">Back to Homepage</Link></p>
              </div>
          </div>
      </div>
  </section>
  </>
  );
};
