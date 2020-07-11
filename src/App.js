import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root'
import FreeCodeCampApp from './FreeCodeCamp/FreeCodeCampApp';

class App extends Component {
  render() {
    return (
      <FreeCodeCampApp />
    );
  }
}

export default hot(App);
