import React from 'react';
import {Link} from 'react-router-dom';

const EditCards = () => {

  return (
    <div className='edit-screen'>
      <div className="edit-front-card">
        <div className="show-front">
          <p>Front of card to be edited... </p>
        </div>

        <div className="edit-delete">
          <button className="edit-card-button">Edit</button>
          <button className="delete-card-button">Delete</button>
        </div>
      </div>

      <div className="edit-back-card">

        <div className="show-back">
           <p>Back of card to be edited...</p>
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

export default EditCards;
