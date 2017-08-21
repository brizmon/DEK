import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {

  return (
    <div className='main-menu'>
      <h2>Main Menu</h2>
      <div className='menu-buttons'>
        <button className='menu-button'>Create Card</button>
        <button className='menu-button'>Take Quiz</button>
        <button className='menu-button'>Edit Cards</button>
      </div>
    </div>
    )
}

export default Main;
