import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
export const LandingPage = () => {
    return (
        <>

            <header>
                <h2>Dominator</h2>
            </header>

            <section class="hero">

                <div class="hero-content-area">
                    <h1>Welcome to</h1>
                    <h3>Data and bug Tracking App</h3>
                    <Link to="/login"><a class="btn">Click to Login</a></Link>
                </div>
            </section>



            <footer>
                <p>Made by Team of Dominator!</p>
            </footer>

        </>
    );
};
