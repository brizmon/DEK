import React from 'react';
import {Link} from 'react-router-dom';

const NameDeck = () => {

  return (
    <div className='name-deck'>
      <h2>Name Your DEK!</h2>
      <div className='name-deck-form'>
        <form action="/register" method='POST'>
          <input type="text" name='dekname' placeholder='Type Name Here' />
          <button className="namedeck-button">Enter</button>
        </form>
      </div>
    </div>
    )
}

export default NameDeck;
