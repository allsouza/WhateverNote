import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <div className="navbar">
            <div>
                <Link to='/'><span className="page-logo">
                    <img src={window.logo} alt="WhateverNote"/>
                    <span>WhateverNote</span>
                </span></Link>
                <nav className="links">
                    <ul>
                        <li><a href="https://github.com/allsouza">GitHub</a> </li>
                        <li><a href="https://www.linkedin.com/in/andre-souza-2ab6a3155/">LinkedIn</a></li>
                    </ul>
                </nav>
            </div>
            <nav className="auth-links">
                <Link to="/auth/signup" >Sign Up</Link> or
                <Link to="/auth/login"> Log in</Link>
            </nav>
        </div>
    )
}