import React, {Comment, Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ""
    }
  }
  
  inputHandler(val) {
    this.setState({userInput: val})
  }
  
  render() {
    return (
      <div className="App">
        <input onChange = {event => this.inputHandler(event.target.value)} placeholder ="Type Here"></input>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
  
}

export default App;
