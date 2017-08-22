import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {

    return (
      <div className='header'>
        <h1 className='header-link-to-main'><Link to="/main">DEK</Link></h1>

        <div className='nav'>
          <div className="nav-dropdown">
            <Link className='nav-link' to="/my-account">My Account</Link>
            <Link className='nav-link' to="/logout">Log out</Link>
          </div>
        </div>

      </div>
    )
  }

export default Header;



