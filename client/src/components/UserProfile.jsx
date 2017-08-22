import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const UserProfile = (props) => {

  return (
    <div className='user-profile'>
      <Header />

      <h2>User Profile</h2>

      <div className="welcome-user-name">
        <h3>Username: {props.username}</h3>
      </div>

      <Footer />
    </div>
    )
}

export default UserProfile;
