import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const NameDeck = () => {

  return (
    <div className='name-deck'>
      <Header />

      <h2>Name Your DEK!</h2>
      <div className='name-deck-form'>
        <form action="/register" method='POST'>
          <input type="text" name='dekname' placeholder='Type Name Here' />
          <button className="namedeck-button">Enter</button>
        </form>
      </div>

      <Footer />
    </div>
    )
}

export default NameDeck;
