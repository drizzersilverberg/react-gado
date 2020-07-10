import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader/root'
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Greet from './components/Greet';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greet />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default hot(App);
