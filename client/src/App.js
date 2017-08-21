import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';

import Main from './components/Main';
import NameDeck from './components/NameDeck';
import CreateCard from './components/CreateCard';
import PickQuizType from './components/PickQuizType';

import axios from 'axios';

class App extends Component {


  handleLoginSubmit = (e, username, password) => {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
        currentPage: 'home',
      });
    }).catch(err => console.log(err));
  }


  // options are firstName, lastName, userName, email, password
  handleRegisterSubmit = (e, options) => {
    e.preventDefault();
    axios.post('/auth/register', {
      options
    })
    .then(res => {
      this.setState(options)
      this.setState({
        currentPage: 'home',
      });
    })
    .catch(err => console.log(err));
  }

  logOut() {
    axios.get('/auth/logout')
      .then(res => {
        this.setState({
          auth: false,
          currentPage: 'home',
        })
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <Route exact path="/" render={() => <Welcome />} />
            <Route exact path="/register" render={() => <Register handleRegisterSubmit={this.handleRegisterSubmit} />} />
            <Route exact path="/login" render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/namedeck" component={NameDeck} />
            <Route exact path="/createcard" component={CreateCard} />
            <Route exact path="/pickquiztype" component={PickQuizType} />

          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
