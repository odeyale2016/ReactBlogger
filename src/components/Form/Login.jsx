// eslint-disable-next-line
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 
//  import Input from './components/Input';
class Login extends React.Component {
   
    state = {
        account: { username: "", password: ""},
        errors: {}
    }

    validate  = () =>{
        const errors = {};
        const { account }  = this.state;
        if (account.username.trim()==='')
            errors.username ='Username is required';
        if (account.password.trim()==='')
            errors.password ='Password is required';
        

        return Object.keys(errors).length === 0 ? null : errors;
    }
    //username = React.createRef();
    handleSubmit = e =>{
    e.preventDefault();

        

     const errors = this.validate();
     this.setState({errors})
     console.log(errors)
     if(errors) return;

        console.log("Record Submitted");
    };
    handleChange = ({currentTarget : inputs}) =>{
        const account = {...this.state.account};
        account[inputs.name] = inputs.value;
        this.setState({account})
    }
    render() { 
        const account = this.state;
        return <div>
           <article className="about-section py-5">
		    <div className="container">
            
            <form onSubmit={this.handleSubmit}>
            <div className="col col-5 m-sm-auto">
            <h1>Login</h1>
            {/* <Input 
               // name="username"
               // value={account.username}
               // label="Username"
                // onChange={this.handleChange}
            /> */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                autoFocus
                value = {account.username}
                onChange={this.handleChange}              
                //ref={this.username}
                type="text" 
                name="username" 
                className="form-control" />

            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                 value = {account.password}
                onChange={this.handleChange}
                 id="password"
                 type="text" 
                 name="password" 
                 className="form-control" />
            </div>
            <p />
                <button className="btn btn-success">Login</button>
                
            </div>
            <p align="center">Forgot Password? <Link to="/forgot_password">Click here</Link></p>
        </form>
       
			     
 
			    
		    </div>
	        </article> 
        </div>;
    }
}
 
export default Login;