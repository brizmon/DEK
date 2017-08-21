import React from 'react';
import {Link} from 'react-router-dom';

const QuizScreen = () => {

  return (
    <div className='quiz-screen'>
      <div className="front-card-all">
        <div className="show-front">
          <p>Front of card goes here </p>
        </div>

        <div className="flip-card">
          <button className="flip-card-button">Flip</button>
        </div>

        <div className="edit-delete">
          <button className="edit-card-button">Edit</button>
          <button className="delete-card-button">Delete</button>
        </div>
      </div>

      <div className="back-card-all">

        <div className="show-back">
           <p>Back of card goes here </p>
        </div>

        <div className="next-card-arrow">
          <p>Arrow goes here</p>
        </div>

        <div className="edit-delete">
          <button className="edit-card">Edit</button>
          <button className="delete-card">Delete</button>
        </div>

      </div>
    </div>
  )
}

export default QuizScreen;
