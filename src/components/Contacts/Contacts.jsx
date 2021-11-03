// eslint-disable-next-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Contacts extends React.Component {
    render() { 
        return <div>
             <article className="about-section py-5">
		    <div className="container">
			   
			    
			    <blockquote className="blockquote m-lg-5 py-3 pl-4 px-lg-5">
                <h2 className="title mb-3">My Contacts</h2> 
						<p className="mb-2"><i className="fas fa-home fa-fw mr-2"></i> Email: odeyale.k@gmail.com, odeyale_kehinde@yahoo.com<br />
                        <i className="fas fa-phone fa-fw mr-2"></i> Phone: +234 80 534 566 34, +234 70 659 320 24<br />
                        <i className="fab fa-github-alt fa-fw"></i>  Github: <Link to="https://github.com/odeyale2016">https://github.com/odeyale201</Link><br />
                        <i className="fab fa-linkedin-in fa-fw"></i> Linkedin: <Link to="https://www.linkedin.com/in/odeyale-kehinde-musliudeen-ba20756a/">https://www.linkedin.com/in/odeyale-kehinde-musliudeen</Link><br />
                        </p>
					 
					</blockquote>
			    <figure><img className="img-fluid" src="assets/images/about-me.jpg" alt="img" /></figure>
 
			    
		    </div>
	        </article> 
        </div>;
    }
}
 
export default Contacts;