import React, {Component} from 'react';

import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Card from './Card.jsx';
import FrontOfCard from './FrontOfCard.jsx'
import BackOfCard from './BackOfCard.jsx'

class QuizScreen extends Component{
  constructor(){
    super();
    this.state = {
      gotCards: false,
      currentCard: 0,
      frontOfCard: true,
      numberCorrect: 0,
      numberWrong: 0,
    }
  }

  getCards = () => {
    let cards = [];
    axios.get('/decks', {
      user_id: this.props.state.user.id
    })
    .then(res => {
      console.log(res.data);
      // put all cards into array of tags
      for(let j = 0; j < res.data.length; ++j){
        cards.push(
          <Card card={res.data[j]}/>
        )
      }
      this.setState({
        cards: cards,
        gotCards: true,
      })
    })
  }

  componentDidMount(){
    this.getCards();
  }

  rotateCard=()=>{
    this.setState({
      frontOfCard: !this.state.frontOfCard,
    })
  }

  getNextCard = () => {
      this.setState({
        currentCard: this.state.currentCard+1,
      })
  }

  increaseNumberCorrect = () => {
    this.setState({
      numberCorrect: this.state.numberCorrect+1
    })
  }
  increaseNumberWrong = () => {
    this.setState({
      numberWrong: this.state.numberWrong+1
    })
  }

  decideWhichSideOfCard = () => {
    if(this.state.currentCard < this.state.cards.length){
      if(this.state.frontOfCard){
        return(
          <FrontOfCard rotateCard={this.rotateCard} card={this.state.cards[this.state.currentCard].props.card}/>
        )
      }
      return(
        <BackOfCard increaseNumberCorrect={this.increaseNumberCorrect} increaseNumberWrong={this.increaseNumberWrong} getNextCard={this.getNextCard} rotateCard={this.rotateCard} card={this.state.cards[this.state.currentCard].props.card}/>
      )
    }
    // console.log('finished exam')
    return(
      <div className='scoreScreen'>
        <h1>Finished Quiz</h1>
        {this.displayScore()}
      </div>
    )
  }

  displayScore = () => {
    if(this.state.cards.length > 0){
      return (
        <h1>Score: {parseInt(this.state.numberCorrect*100/(this.state.numberCorrect+this.state.numberWrong))}%</h1>
      )
    }
    return(
      <h1>You have no cards</h1>
    )
    
  }

  // display all cards
  render(){
    if(this.state.gotCards){
      return (
        <div className='create-card'>
          <Header />
          {this.decideWhichSideOfCard()}
          <Footer />
        </div>
      )
    }
    return(
      <div>
        Loading...
      </div>
    )
  }

}

export default QuizScreen;
