import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';

import Main from './components/Main';
import UserProfile from './components/UserProfile';
import NameDeck from './components/NameDeck';
import CreateCard from './components/CreateCard';
import PickQuizType from './components/PickQuizType';
import QuizScreen from './components/QuizScreen';

import axios from 'axios';

class App extends Component {

  handleLoginSubmit = (e, username, password) => {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
      console.log(res.data.user)
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      });
      window.location.href ='/main';
      console.log(this.state)
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit = (e, options) => {
    e.preventDefault();
    axios.post('/auth/register', {
      options
    })
    .then(res => {
      this.setState(options)
    })
    .catch(err => console.log(err));
  }

  logOut() {
    axios.get('/auth/logout')
      .then(res => {
        this.setState({
          auth: false,
          currentPage: 'welcome',
        })
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="main">

            <Route exact path="/" render={() => <Welcome />} />
            <Route exact path="/main" render={() => <Main />} />
            <Route exact path="/register" render={() => <Register handleRegisterSubmit={this.handleRegisterSubmit} />} />
            <Route exact path="/login" render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />} />
            <Route exact path="/userprofile" component={UserProfile} />
            <Route exact path="/namedeck" component={NameDeck} />
            <Route exact path="/createcard" component={CreateCard} />
            <Route exact path="/pickquiztype" component={PickQuizType} />
            <Route exact path="/quizscreen" component={QuizScreen} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
