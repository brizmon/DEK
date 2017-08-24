import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Card from './Card.jsx';




class EditCards extends Component{
  constructor(){
    super();
    this.state = {
      gotCards: false,
    }
  }

  getCards = () => {
    let cards = [];
    // fetch to backend /decks
    console.log(this.props.state.user.id)
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
  

  // display all cards
  render(){
    if(this.state.gotCards){
      return (
        <div className='edit-screen'>
          <Header />
          <h2>Edit your Cards!</h2>
          {this.state.cards}
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

export default EditCards;
