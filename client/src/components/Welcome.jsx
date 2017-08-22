import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {

  return (
      <div className="white-border">
        <div className="card-tag"></div>
        <div className="card-tag-two"></div>
        <div className="border"></div>
        <div className='welcome'>
          <h1>DEK</h1>
          <div className="welcome-message">
            <h2>DEK is an app that helps you learn fast by determining what material you know well and then focusing your studies on material you find challenging and material you haven't studied recently.</h2>
          </div>
          <div className='auth-buttons'>
            <Link to="/register"><button>Sign Up</button></Link>
            <Link to="/login"><button>Log In</button></Link>
          </div>
        </div>
      </div>
    )
}

export default Welcome;
