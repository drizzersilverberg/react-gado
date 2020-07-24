import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root'
import UdemyReactReduxApp from './UdemyReactRedux/UdemyReactReduxApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UdemyReactReduxApp name={"Maxi"} age={9}/>
      </div>
    );
  }
}

export default hot(App);
