import React from 'react';
import {Link} from 'react-router-dom';

export default class SplashContent extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        debugger
        this.props.history.push('/auth/signup')
    }

    render(){
        return(
            <div className="splash-content">
                <div className="first">
                <div className="page-limit">
                    <img src={window.splash1} alt="splash1"/>
                    <div className="first-right-col">
                        <div className="texts">
                            <h1 id="first-title">Whatever you're thinking</h1>
                            <h1 id="second-title">Write it down</h1>
                            <h3 id="text">WhateverNote is here to help you remember all your everyday bits of information, that might fall into forgetfullness</h3>
                        </div>
                        <Link id="signup-button" to='/auth/signup'>Sign up for free</Link>
                    </div>
                </div>
                </div>

                {/* will add more elements if I have more time later */}
            </div>
        )
    }
}