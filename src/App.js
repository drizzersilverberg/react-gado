import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root'
import VoronoiDiagram from './components/VoronoiDiagram'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VoronoiDiagram/>
      </div>
    );
  }
}

export default hot(App);
