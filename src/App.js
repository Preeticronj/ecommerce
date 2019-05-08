import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Routes from './components/Routes'
import {
BrowserRouter as Router
}from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Footer />
        <Router>
           <Navigation /> 
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
