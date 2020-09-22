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
            <div>
                <h1>Sign Up</h1>
                <Link to='/auth/login'>Login</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input type="text" onChange={this.handleChange('first_name')} value={this.state.first_name}/>

                    <label>Last Name:</label>
                    <input type="text" onChange={this.handleChange('last_name')} value={this.state.last_name}/>

                    <label>Email:</label>
                    <input type="text" onChange={this.handleChange('email')} value={this.state.email}/>

                    <label>Password:</label>
                    <input type="password" onChange={this.handleChange('password')} value={this.state.password} />

                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}