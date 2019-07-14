import React from 'react'
import './App.css'
import { hot } from 'react-hot-loader/root'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Videos</h1>
        </header>
      </div>
    );
  }
}

export default hot(App);
