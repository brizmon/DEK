import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (
      <div className='header'>

        <h1 className='header-link-to-main'><Link to="/main">DEK</Link></h1>

        <div className='nav'>

          <div className='bars'>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>

          <div className="nav-dropdown">
            <Link className='nav-link' Link to="/userprofile">My Profile</Link>
            <Link className='nav-link' Link to="/">Log out</Link>
          </div>

        </div>

      </div>
    )
  }

export default Header;



