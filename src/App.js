import './App.css';
import './sidebar.css';
import {Route,BrowserRouter as Router, NavLink } from "react-router-dom";
import {FaFacebook, FaInstagram, FaYoutube,FaTwitter, FaBars} from "react-icons/fa";

import home from './pages/home';
import about from './pages/about';
import services from './pages/services';
import contact from './pages/contact';
import Sidebar from './pages/sidebar';


  
    
function App() {
  return (
    <div className="container" id="container">
    <Router>
      <header>
            
            <img src="img/Collab..png" alt="" class="logo"/>
            <nav class="navigation">
                <NavLink exact to="./" className="navigation--item" activeClassName="navigation--item--active">Home</NavLink>
                <NavLink to="./About" className="navigation--item" activeClassName="navigation--item--active">About</NavLink>
                <NavLink to="./Services" className="navigation--item" activeClassName="navigation--item--active">Sevices</NavLink>
                <NavLink to="./Contact" className="navigation--item" activeClassName="navigation--item--active">Contact</NavLink>
            </nav>
            
            <div class="menu-button" id="outer-container" onclick="toggleMobileNavigation()">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
              <NavLink to="#"id="page-wrap" ><FaBars></FaBars></NavLink>
            </div>
            
            <button class="navigation--button">
                Get strated
            </button>
       
    </header>

    <Route path="/" exact component={home}/>
    <Route path="/services" component={services}/>
    <Route path="/contact" component={contact}/>
    <Route path="/about" component={about}/>
    </Router>
    <Router>
    <footer >
        <div class="social">
            <NavLink to className="social--item"><FaTwitter></FaTwitter></NavLink>
            <NavLink to className="social--item"><FaYoutube></FaYoutube></NavLink>
            <NavLink to className="social--item"><FaInstagram></FaInstagram></NavLink>
            <NavLink to className="social--item"><FaFacebook></FaFacebook></NavLink>
        </div>   
    <span>Made by Said AMZAL in 2020</span>
    </footer>   
    </Router>
     
    </div>
  );
}

export default App;
