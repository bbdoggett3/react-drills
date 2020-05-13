import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      favMovies: ["Back to the Future", "Tron: Legacy", "Iron Man", "Ford v. Ferrari", ]
    }
  }

  render() {

    let displayMovie = this.state.favMovies.map((element, index) => {
      return <h1 key= {index}> {element} </h1>;
    });
    
    return <div className="App">
          {displayMovie}
      </div>
  }

}

export default App;
