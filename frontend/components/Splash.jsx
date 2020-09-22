import React from 'react';
import NavBarContainer from './bars/nav_bar_container';
import SplashContent from './splash_content/splash_content';

export default function Splash(){
    return(
        <div className="splash">
            <NavBarContainer/>
            <SplashContent/>
        </div>
    )
}