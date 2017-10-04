import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Main = (props) => {

  return (
    <div className='main-menu'>
      
        {props.firstname !== undefined ? <h1>Welcome, {props.firstname}!</h1> : props.handleRedirect('/')}

      <div className='menu-buttons'>
        <button onClick={(e)=>props.handleRedirect('/createcard')} className='waves-effect waves-light btn-large menu-button'>Create Card</button>
        <button onClick={(e)=>props.handleRedirect('/pickquiztype')} className='waves-effect waves-light btn-large menu-button'>Take Quiz</button>
        <button onClick={(e)=>props.handleRedirect('/editcards')} className='waves-effect waves-light btn-large menu-button'>Edit Cards</button>
      </div>

      <Footer />

    </div>
    )
}

export default Main;


