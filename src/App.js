 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route}  from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Form/Login';
import ForgotPassword from './components/Form/ForgotPassword';
import Footer from './components/Footer';

const App = () =>  {
   
  return (
    <div>
      
    <Sidebar />
    
    <div className="main-wrapper">
	   <Header />
	   <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route  path="/contacts">
            <Contacts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot_password">
            <ForgotPassword />
          </Route>
           
        </Switch>
	    
	    <Footer />
    
    </div>
    {/* <!--//main-wrapper--> */}
    
    
    
    
    {/* <!-- *****CONFIGURE STYLE (REMOVE ON YOUR PRODUCTION SITE)****** -->   */}
  
    {/* <!--//configure-panel--> */}
    </div>
  );
}

export default App;
