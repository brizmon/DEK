import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const PickQuizType = (props) => {

  return (
    <div className='pick-quiz-type'>
      <Header />

      <h2>Pick Your Quiz Type!</h2>
      <div className='pickquiz-form'>
          <Link className='pickquiz-button' Link to="/quizscreen">Basic Quiz (review all cards)</Link>
          <Link className='pickquiz-button' Link to="/quizscreen">Curated Quiz (spaced repetition)</Link>
      </div>

      <Footer />
    </div>
    )
}

export default PickQuizType;
