import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './bars/nav_bar';
import SplashContent from './splash_content/splash_content';
// import LoginFormContainer from './auth/login_form_container';

export default function Splash(){
    return(
        <div className="splash">
            <NavBar/>
            <SplashContent/>

            {/* <Route exact path="/auth/login" component={LoginFormContainer} />      */}
        </div>
    )
}