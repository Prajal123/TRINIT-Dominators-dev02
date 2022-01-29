import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export const HomePage = () => {
  return (<>
    <div className="text-center">
            <h1>welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
  </>);
};
