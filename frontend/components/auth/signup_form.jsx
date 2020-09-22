import React from 'react';
import { Link } from 'react-router-dom';

export default class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state);
    }

    render(){
        return(
            <div className="signup-form">
                <Link to='/'><div className="form-logo">
                    <img src={window.logo} alt="WhateverNote"/>
                    <h2>WhateverNote</h2>
                    <p>Remember whatever you need.</p>
                </div></Link>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="First name" onChange={this.handleChange('first_name')} value={this.state.first_name}/>

                    <input type="text" placeholder="Last name" onChange={this.handleChange('last_name')} value={this.state.last_name}/>

                    <input type="text" placeholder="Email address" onChange={this.handleChange('email')} value={this.state.email}/>

                    <input type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.password} />

                    <button>Sign up</button>
                </form>
                <div className="auth-options">
                    <p>Already have an account?</p>
                    <Link to='/auth/login'>Log in</Link>
                </div>
            </div>
        )
    }
}