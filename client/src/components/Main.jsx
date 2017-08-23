import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import CreateCard from './CreateCard';

const Main = (props) => {

  return (
    <div className='main-menu'>

      <Header />

      <div className="welcome-user-name">
        <p>Welcome, {props.firstname}</p>
      </div>

      <div className='menu-buttons'>
        <button onClick={(e)=>props.handleRedirect('/createcard')} className='menu-button'>Create Card</button>
        <button onClick={(e)=>props.handleRedirect('/pickquiztype')} className='menu-button'>Take Quiz</button>
        <button onClick={(e)=>props.handleRedirect('/editcards')} className='menu-button'>Edit Cards</button>
      </div>

      <Footer />

    </div>
    )
}

export default Main;
