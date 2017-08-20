import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Welcome from './components/Welcome';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <Route exact path="/" component={Welcome} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
