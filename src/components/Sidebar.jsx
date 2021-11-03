// eslint-disable-next-line
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Sidebar extends React.Component {
    render() { 
        return <div>
              <header className="header text-center">	    
	    <h1 className="blog-name pt-lg-4 mb-0"><Link to="/">Odeyale Kehinde </Link></h1>
        
	    <nav className="navbar navbar-expand-lg navbar-dark" >
           
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" className="collapse navbar-collapse flex-column" >
				<div className="profile-section pt-3 pt-lg-0">
				    <img className="profile-image mb-3 rounded-circle mx-auto" src={`/assets/images/profile.png`} alt="img0" />			
					
					<div className="bio mb-3">Hi, my name is Odeyale Kehinde, a fullstack developer, I use Reactjs and Django as a devtools. <Link to="/about">Read more... </Link></div>
          {/* <!--//bio--> */}
					<ul className="social-list list-inline py-3 mx-auto">
			            <li className="list-inline-item"><Link to="https://twitter.com/alphatech078"><i className="fab fa-twitter fa-fw"></i></Link></li>
			            <li className="list-inline-item"><Link to="https://www.linkedin.com/in/odeyale-kehinde-musliudeen-ba20756a/"><i className="fab fa-linkedin-in fa-fw"></i></Link></li>
			            <li className="list-inline-item"><Link to="https://github.com/odeyale2016"><i className="fab fa-github-alt fa-fw"></i></Link></li>
			            <li className="list-inline-item"><Link to="https://stackoverflow.com/odeyale-kehinde"><i className="fab fa-stack-overflow fa-fw"></i></Link></li>
			            <li className="list-inline-item"><Link to="https://codepen.com/"><i className="fab fa-codepen fa-fw"></i></Link></li>
			        </ul>
              {/* <!--//social-list--> */}
			        <hr /> 
				</div>
        {/* <!--//profile-section--> */}
				
				<ul className="navbar-nav flex-column text-left">
					<li className="nav-item active">
					    <Link className="nav-link" to="/"><i className="fas fa-home fa-fw mr-2"></i>Home <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
					    <Link className="nav-link" to="/about"><i className="fas fa-user fa-fw mr-2"></i>About Me</Link>
					</li>
					<li className="nav-item">
					    <Link className="nav-link" to="/portfolio"><i className="fas fa-bookmark fa-fw mr-2"></i>Portfolio</Link>
					</li>
					
                    <li className="nav-item">
					    <Link className="nav-link" to="/contacts"><i className="fas fa-phone fa-fw mr-2"></i>Contacts</Link>
					</li>
				</ul>
				
				<div className="my-2 my-md-3">
				    <Link className="btn btn-primary" to="/login">Login</Link>
				</div>
			</div>
		</nav>
    </header>

        </div>;
    }
}
 
export default Sidebar;