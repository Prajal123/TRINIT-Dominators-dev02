import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export const RegisterPage = () => {
  return (<>
  <section>
      <div className="box">
          <div className="login-container">
              <div className="form">
                  <form action="/home">
                      <h1>Create your Account!</h1>
                    <div>
                    <label>Username</label>
               <input type="text" name="username" placeholder="Enter your username here" required />
                    </div>
                    <div>
                    <label>Email</label>
               <input type="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div>
               <label>Password</label>
               <input type="password" name="password" placeholder="Enter your password here" required  />
           </div>
           <input type="submit" name="create" value="Submit" />
                  </form>
                  <p><Link to="/">Back to Homepage</Link></p>
              </div>
          </div>
      </div>
  </section>
  </>);
};
