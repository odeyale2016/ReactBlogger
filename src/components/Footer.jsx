// eslint-disable-next-line
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends React.Component {

    render() { 
        return <div>
            <footer className="footer text-center py-2 theme-bg-dark">
		   
           {/*   This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com   */}
              
             <small className="copyright">Developed by <Link to="my-resume.netlify.app" target="_blank">Odeyale Kehinde</Link></small>
        
            </footer>

        </div>;
    }
}
 
export default Footer;