import React from 'react';
import {Link} from 'react-router-dom';

const UserProfile = () => {

  return (
    <div className='user-profile'>
      <h2>User Profile</h2>
      <div className='username'>
        <h3>Username</h3>
      </div>
      <div className='scores'>
        <h3>Scores</h3>
      </div>
    </div>
    )
}

export default UserProfile;
