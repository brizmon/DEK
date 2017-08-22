import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


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
  axios.get('/allcards')
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

            <button className="edit-card">Edit</button>
            <button className="delete-card">Delete</button>

            <button className="right-card-button" onClick="booleantrue">right</button>
            <button className="wrong-card-button" onClick="booleanwrong">wrong</button>
          </div>
        </div>
      )
    }
    else {
      return <p>Loading... </p>
    }
  }
  render(){
    return (
      <div>{this.renderCardPage()}</div>
    )
  }
}

export default QuizScreen;
