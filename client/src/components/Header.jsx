import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <div className='header'>
        <h1>DEK</h1>
        <div className='nav'>
          <button className='nav-button'>My Account</button>
          <button className='nav-button'>Logout</button>
        </div>
      </div>
    )
  }
}

export default Header;
