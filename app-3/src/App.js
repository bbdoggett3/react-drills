import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      favMovies: ["Back to the Future", "Tron: Legacy", "Iron Man", "Ford v. Ferrari", ],
      filterString: ""
    }
  }

  eventHandler(filter) {
    this.setState({filterString: filter})
  }

  render() {
    let displayMovie = this.state.favMovies.filter((element, index) => {
      return element.includes(this.state.filterString);
    })

    .map((element, index) => {
      return <h2 key = {index} >{element}</h2>
    });

    return (
      <div className="App">
        <input onChange= {event => this.eventHandler(event.target.value)} type="text"></input>
        {displayMovie};
      </div>
    );
  }
}

export default App;
