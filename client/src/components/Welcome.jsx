import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {


  return (
      <div className="white-border">
        <div className="card-tag"></div>
        <div className="card-tag-two"></div>
        <div className="border"></div>
        <div className='welcome'>
          <h1>Dek</h1>
          <h2>Short intro: what DEK is about...</h2>
          <div className='auth-buttons'>
            <Link to="/register"><button>Sign Up</button></Link>
            <Link to="/login"><button>Log In</button></Link>
          </div>
        </div>
      </div>
    )
}

export default Welcome;
