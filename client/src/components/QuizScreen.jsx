import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
    }
  }

  getCards = () => {
    let cards = [];
    // fetch to backend /decks
    // console.log(this.props.state.user.id)
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
    if(this.state.currentCard < this.state.cards.length)
    this.setState({
      currentCard: this.state.currentCard+1,
    })
    else{
      console.log("Got last card");
    }
  }


  decideWhichSideOfCard = () => {
    if(this.state.frontOfCard){
      return(
        <FrontOfCard rotateCard={this.rotateCard} card={this.state.cards[this.state.currentCard].props.card}/>
      )
    }
    return(
      <BackOfCard getNextCard={this.getNextCard} rotateCard={this.rotateCard} card={this.state.cards[this.state.currentCard].props.card}/>
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
