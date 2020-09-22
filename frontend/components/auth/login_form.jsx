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
    }

    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
    }

    render(){
        return(
            <div>
                <h1>Log in</h1>
                <Link to='/auth/signup'>Sign up</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="text" onChange={this.handleChange('email')} value={this.state.email}/>

                    <label>Password:</label>
                    <input type="password" onChange={this.handleChange('password')} value={this.state.password} />

                    <button>Log in</button>
                </form>
            </div>
        )
    }
}