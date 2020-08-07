import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import InfiniteScrollApp from './InfiniteScrollApp/InfiniteScrollApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfiniteScrollApp/>
      </div>
    );
  }
}

export default hot(App);
