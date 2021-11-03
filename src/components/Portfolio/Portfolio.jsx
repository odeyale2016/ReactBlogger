// eslint-disable-next-line
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Portfolio extends React.Component {
    render() { 
        return <div>
            
            <article className="about-section py-5">
		    <div className="container">
			    <h2 className="title mb-3">My Portfolios</h2>
			    
			    

  
			    <h5 className="mt-5">Side Projects</h5>
			    <p><ul type="square">
                
                    <li>	Farmcrest (ReactJs Farm application) <Link to="https://farmcrest.netlify.app/">https://farmcrest.netlify.app/</Link></li>
                    <li>    ReactBlogger (ReactJs application) <Link to="https://reactblogger.netlify.app/">https://reactblogger.netlify.app/</Link> </li>
                    <li>	Pycommerce(Python Django Ecommerce Application) <Link to="https://pycommerce.netlify.app/">https://pycommerce.netlify.app/</Link></li>
                    <li>	Islamic Questions and Answers forum with php <Link to="https://shaykhajia.com/">https://shaykhajia.com/</Link>	</li>	 
                    <li>	Yusa’ad Educational services (wordpress) <Link to="https://yusaadedu.com">https://yusaadedu.com</Link></li>		 
                    <li>	Hotel booking System - <Link to="https://www.waterfieldluxhotel.com">https://www.waterfieldluxhotel.com</Link></li>
                    <li>	Schools Plan (Online School Management System)  - <Link to="https://www.schoolsplan.com">https://www.schoolsplan.com</Link></li>
                    <li>	Mile 12 Connect(Online Shopping for Farm Produce) -<Link to="www.mile12connect.com">www.mile12connect.com</Link> (Ecommerce using PHP)</li>
                    <li>	Dbrief Media  Application(Billboard Management System)<Link to="www.driefmedia.com/portal">www.driefmedia.com/portal</Link> (Web Application using PHP)</li>
                    <li>	Web based Expert System to diagnosed Maize Diseases (Web Based Application using PHP)</li>
                    <li>	Autofix Management System   <Link to="www.autofixportal.com.ng">www.autofixportal.com.ng</Link> (Web Application using PHP)</li>
                    <li>	Steward Africa (Online Microcredit Application ) <Link to="www.stewardafrica.org">www.stewardafrica.org</Link></li>
                    <li>	School Management System – <Link to="www.penckersschools.com/portal">www.penckersschools.com/portal</Link></li>
                    <li>	Internet Radio (KingFM 103.9 Ibadan) <Link to="www.kingfm1039.com">www.kingfm1039.com</Link></li>
</ul></p>
			    
			     
		    </div>
	        </article> 
        </div>;
    }
}
 
export default Portfolio;