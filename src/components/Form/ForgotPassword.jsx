// eslint-disable-next-line
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class ForgotPassword extends React.Component {
    render() { 
        return <div>
             <article className="about-section py-5">
		    <div className="container">
            
            <form onSubmit={this.handleSubmit}>
            <div className="col col-5 m-sm-auto">
            <h3> Reset your Password</h3>
            <div className="form-group">
                <label htmlFor="email">Enter your E-mail</label>
                <input 
                autoFocus
                //value = {account.username}
                //onChange={this.handleChange}              
                id="email" 
                type="text" 
                name="email" 
                className="form-control" />

            </div>
             
            <p />
                <button className="btn btn-success">Submit</button>
                
            </div>
            <p align="center">Login? <Link to="/login">Click here</Link></p>
        </form>
       
			     
 
			    
		    </div>
	        </article> 
        </div>;
    }
}
 
export default ForgotPassword;