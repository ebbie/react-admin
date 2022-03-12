import React, { Component, SyntheticEvent } from 'react';
import './Public.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
    first_name = '';
    last_name ='';
    email = '';
    password = '';
    password_confirm ='';
    state = {
        redirect: false
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('register',{
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
            role_id: 2,
        });

        this.setState({
            redirect: true
        })
    }
  render() {
      if(this.state.redirect) {
        return <Redirect to={'/login'} />
      }
    return (
            <form className="form-signin" onSubmit={this.submit}>
                <h1 className ="h3 mb-3 fw-normal">Please register</h1>
                
                <div className ="form-floating">
                    <input type ="text" className ="form-control" id="firstName" placeholder="First Name" required
                    onChange={e => this.first_name = e.target.value}/>
                    <label htmlFor="firstName">First Name</label>
                </div>

                <div className ="form-floating">
                    <input type ="text" className ="form-control" id="lastName" placeholder="Last Name" required 
                    onChange={e => this.last_name = e.target.value}/>
                    <label htmlFor="lastName">Last Name</label>
                </div>

                <div className ="form-floating">
                    <input type ="email" className ="form-control" id="inputEmail" placeholder="name@example.com" required 
                    onChange={e => this.email = e.target.value}/>
                    <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className ="form-floating">
                    <input type ="password" className ="form-control" id="inputPassword" placeholder="Password" required 
                    onChange={e => this.password = e.target.value}/>
                    <label htmlFor="inputPassword">Password</label>
                </div>

                <div className ="form-floating">
                    <input type ="password" className ="form-control" id="passwordConfirm" placeholder="Password Confirm" required 
                    onChange={e => this.password_confirm = e.target.value}/>
                    <label htmlFor="passwordConfirm">Password Confirm</label>
                </div>
                <button className ="w-100 btn btn-lg btn-primary" type ="submit">Register</button>
                
            </form>
    )
  }
}
