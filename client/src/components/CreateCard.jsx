import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

class CreateCard extends Component{
  render(){
    return (
      <div className='create-card'>

      <Header />


        <h2>Create a Card!</h2>
          <div className="create-front">
            <h3>Front Side</h3>
            <div className="create-front-side-card">

              <form method="POST" onSubmit="">
                <input type="text" placeholder="Question" />
                <input className="save-front-side-card" type="submit" value="SUBMIT QUESTION" />
              </form>

            </div>
          </div>
          <div className="create-back">
            <h3>Back Side</h3>
            <div className="create-back-side-card">

              <form method="POST" onSubmit="">
                <input type="text" placeholder="Answer" />
                <input className="save-back-side-card" type="submit" value="SUBMIT ANSWER" />
              </form>

            </div>
          </div>

        <Footer />
      </div>
    )
  }
}

export default CreateCard;
