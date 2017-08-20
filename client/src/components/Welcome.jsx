import React from 'react';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome!</h1>
      <h2>Short intro: what DEK is about...</h2>
      <div className='auth-buttons'>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
    )
}

export default Welcome;
