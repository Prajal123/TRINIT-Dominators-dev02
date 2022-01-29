import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export const LoginPage = () => {
  return (<>
  <section>
      <div className="box">
          <div className="login-container">
              <div className="form">
                  <form action="/home">
                  <h1>LOGIN</h1>
           <div>
               <label>Username</label>
               <input type="text" name="username" placeholder="Enter your username here" required />
           </div>
           <div>
               <label>Password</label>
               <input type="password" name="password" placeholder="Enter your password here" required  />
           </div>
           <input type="submit" name="login" value="LOGIN" />
                  </form>
                  <p>Don't have an account<Link to="/register">Create an account</Link></p>
              </div>
          </div>
          </div>
</section>
        </>);
};
