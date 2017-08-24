import React, {Component} from 'react';

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
          <Card handleRedirect={this.props.handleRedirect} card={res.data[j]}/>
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


  showEditCards = () => {
    if(this.state.cards.length > 0)
    {
      return(
        <div>
          <h2>Edit your Cards!</h2>
          <div className="edit-cards-main">
            {this.state.cards}
          </div>
        </div>
      )
    }
    return(
      <div className="edit-cards-main">
        <h1>You have no cards</h1>
      </div>
    )
  }


  // display all cards
  render(){
    if(this.state.gotCards){
      return (

        <div className='edit-screen'>
          <Header />

          <div className="edit-container">
            {this.showEditCards()}
          </div>
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
