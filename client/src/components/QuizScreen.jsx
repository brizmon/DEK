import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

import QuizCardShow from './QuizCardShow';

class QuizScreen extends Component{

  constructor(){
    super();
    this.state = {
      thestuff: '',
      thestuffLoaded: false,
    }
    this.renderCardPage = this.renderCardPage.bind(this);
  }

  handleCardPage(){
  axios.get('/decks')
    .then(res => {
      this.setState({
        thestuff: res.data,
        thestuffLoaded: true,
      })
    })
  }

  renderCardPage(){
    if (this.state.thestuffLoaded){
      return (
        <div className='quiz-screen'>

          <div className="front-card-all" onClick="flip-card">
            <div className="show-front">
              <p>Front of card goes here </p>
            </div>

            <div className="edit">
              <button className="edit-card-button" onClick="openitsform">Edit</button>
            </div>
          </div>

          <div className="back-card-all">
            <div className="show-back">
               <p>Back of card goes here </p>
            </div>

            <div className="next-card-arrow">
              <p>Arrow goes here</p>
            </div>

              <button className="edit-card" onClick="openbackcreateform">Edit</button>

              <button className="right-card-button" onClick="booleantrue andnext">right</button>
              <button className="wrong-card-button" onClick="booleanwrong andnext">wrong</button>
            </div>
            <button className="delete-card" onClick="deletecard">Delete</button>

          <Footer />
        </div>
      )
    }
    else {
      return <p>Loading... </p>
    }
  }
  render(){
    return (
      <div>
        <Header />

        <div>{this.renderCardPage()}</div>

        <Footer />
      </div>
    )
  }
}

export default QuizScreen;
