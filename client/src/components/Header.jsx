import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (
      <div>
        
        <nav className="default" role="navigation">
          <div className="nav-wrapper">
            <Link to="/main"><h1 className="brand-logo left">Dek</h1></Link>
            <a href="#!" data-activates="mobile-demo" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
            <ul className="side-nav" id="mobile-demo">
              <li><Link className='nav-link' Link to="/main">Home</Link></li>
              <li><Link className='nav-link' Link to="/userprofile">My Profile</Link></li>
              <li><Link className='nav-link' Link to="/createcard">Create Card</Link></li>
              <li><Link className='nav-link' Link to="/editcards">Edit Cards</Link></li>
              <li><Link className='nav-link' Link to="/pickquiztype">Pick Quiz</Link></li>
              <li><Link className='nav-link' Link to="/aboutapp">About DEK</Link></li>
              <li><Link className='nav-link' Link to="/">Log out</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

export default Header;



