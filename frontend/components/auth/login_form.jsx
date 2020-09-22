import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoAccount = this.demoAccount.bind(this);
    }

    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
    }

    demoAccount(){
        const dori = {
            email:"dori@coralreef.au",
            password: "iforgot"
        }
        this.props.login(dori);
    }

    render(){
        return(
            <div className="login-form">
                <Link to='/'><div className="form-logo">
                    <img src={window.logo} alt="WhateverNote"/>
                    <h2>WhateverNote</h2>
                    <p>Remember whatever you need.</p>
                </div></Link>

                <div className="demo">
                    <button onClick={this.demoAccount}><i className="fas fa-user"></i>Demo Account</button>
                    <p>or</p> 
                </div>
               

                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange('email')} value={this.state.email} placeholder=" Email address"/>

                    <input type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder=" Password"/>

                    <button>Log in</button>
                </form>
                <div className="auth-options">
                    <p>Don't have an account?</p>
                    <Link to='/auth/signup'>Create account</Link>
                </div>
            </div>
        )
    }
}