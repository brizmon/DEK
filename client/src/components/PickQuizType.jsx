import React from 'react';
import {Link} from 'react-router-dom';

const PickQuizType = () => {

  return (
    <div className='pick-quiz-type'>
      <h2>Pick Your Quiz Type!</h2>
      <div className='pickquiz-form'>
          <button className="pickquiz-button">Basic</button>
          <button className="pickquiz-button">Curated</button>
      </div>
    </div>
    )
}

export default PickQuizType;
