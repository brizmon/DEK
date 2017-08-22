import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

class CreateCard extends Component{

  constructor() {
    super();
    this.state = {
      question: '',
      answer: '',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post('/deck', {
        question: this.state.question,
        answer: this.state.answer,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    e.target.reset();
  }

  render(){
    return (
      <div className='create-card'>

      <Header />

        <h2>Create a Card!</h2>
          <div className="create-front">
            <div className="create-front-side-card">

              <form method="POST" onSubmit={this.handleFormSubmit}>

                  <input
                  type="text"
                  placeholder="Question"
                  name="question"
                  value={this.state.question}
                  onChange={this.handleInputChange}
                  />

                <input
                className="save-front-side-card"
                type="submit"
                value="SUBMIT QUESTION"
                />
              </form>

            </div>
          </div>
          {/* <div className="create-back">
            <div className="create-back-side-card">

              <form method="POST" onSubmit={this.handleFormSubmit}>
                <input
                type="text"
                placeholder="Answer"
                name="answer"
                value={this.state.answer}
                onChange={this.handleInputChange}
                />

                <input
                className="save-back-side-card"
                type="submit"
                value="SUBMIT ANSWER"
                />
              </form>

            </div>
          </div> */}

        <Footer />
      </div>
    )
  }
}

export default CreateCard;
