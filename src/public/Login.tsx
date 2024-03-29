import React, { Component, SyntheticEvent } from "react";
import './Public.css';
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
    email ='';
    password = '';
    state = {
        redirect: false
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post('login',{
            email: this.email,
            password: this.password
        });

        localStorage.setItem('token',response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        
        this.setState({
            redirect: true
        });
    }
    
    render() {
        if(this.state.redirect) {
            return <Redirect to={'/'} />;
        }
        return (
            <form className="form-signin" onSubmit={this.submit}>
                <h1 className ="h3 mb-3 fw-normal">Please sign in</h1>

                <div className ="form-floating">
                    <input type ="email" className ="form-control" id="floatingInput" placeholder="name@example.com" required
                    onChange={e => this.email = e.target.value}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className ="form-floating">
                    <input type ="password" className ="form-control" id="floatingPassword" placeholder="Password" required
                    onChange={e => this.password = e.target.value}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className ="w-100 btn btn-lg btn-primary" type ="submit">Sign in</button>
                
            </form>
        )
    }
}

export default Login;