import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CreateCard extends Component{

  constructor(){
    super();
    this.state = {
      thestuff: '',
      thestuffLoaded: false,
    }
    this.renderCardPage = this.renderCardPage.bind(this);
  }

  handleCardPage(){
  axios.get('/createcard')
    .then(res => {
      this.setState({
        thestuff: res.data,
        thestuffLoaded: true,
      })
    })
  }

  renderCardPage(){
    if (this.state.thestuffLoaded){
      return <p>This is where the stuff goes</p>
    }
    else {
      return <p>Loading... </p>
    }
  }

  render(){
    return (
      <div className='create-card'>
        <h2>Create a Card!</h2>
          {this.renderCardPage()}
          <div className="create-front">
            <h3>Front Side</h3>
            <div className="create-front-side-card">

            </div>
            <button className="save-front-side-card">Save</button>
          </div>
          <div className="create-back">
            <h3>Back Side</h3>
            <div className="create-back-side-card">

            </div>
            <button className="save-back-side-card">Save</button>
          </div>
      </div>
    )
  }
}

export default CreateCard;
