import React, { Component } from 'react';
import './App.css';
import Image from './components/Image';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Image url = {"https://pbs.twimg.com/media/EMtmPFLWkAA8CIS.jpg"}/>
      </div>
    );
  }

}

export default App;
