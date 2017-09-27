import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Card from './Card.jsx'
import axios from 'axios'
class UserProfile extends Component{
  constructor(){
    super();
    this.state = {
      gotCards: false,
    }
  }

  componentDidMount(){
    this.getCards();
  }
  getCards = () => {
    let cards = [];
    axios.get('/decks', {
      user_id: this.props.id
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

  render(){
    if(this.state.gotCards){
      return (
        <div className='user-profile'>
         

          <div className="user-profile-info">
            <h2>Your Profile</h2>
            <h3>User ID: {this.props.id}</h3>
            <h3>Username: {this.props.username}</h3>
            <h3>First Name: {this.props.firstname}</h3>
            <h3>Last Name: {this.props.lastname}</h3>
            <h3>E-mail: {this.props.email}</h3>
            <h3>Number of cards: {this.state.cards.length}</h3>
          </div>

          <Footer />
        </div>
      )
    }
    return (
      <div className='user-profile'>

        <div className="user-profile-info">
          <h1>Loading Card Info</h1>
        </div>

        <Footer />
      </div>
    )
  }
}

export default UserProfile;
