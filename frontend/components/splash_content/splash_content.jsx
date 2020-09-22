import React from 'react';
import {Link} from 'react-router-dom';

export default class SplashContent extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
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
                <div className='second'>
                    <div className='page-limit'>
                        <h1>How It Works</h1>
                        <ul>
                            <li>
                                <div><img src={window.logo} alt="logo"/></div>
                                <h3>Sign Up</h3>
                                <p>Create your account in one simple step.</p>
                            </li>
                            <li>
                                <div><i className="fas fa-plus-square"></i></div>
                                <h3>Add Content</h3>
                                <p>Type your notes and save them to your notebooks.</p>
                            </li>
                            <li>
                                <div><i className="fas fa-check-square"></i></div>
                                <h3>Get Things Done</h3>
                                <p>Now you can focus on getting things, instead of trying to remember what you needed to do.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}