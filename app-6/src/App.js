import React, { Component } from 'react';
import './App.css';
import Todo from './componennts/Todo';

class App extends Component {
constructor() {
  super();

  this.state = {
    todoList: [],
    userInput: ""
  };

  this.addList = this.addList.bind(this);
}

inputHandler(val) {
  this.setState({userInput: val});
}

addList() {
  this.setState({
    todoList: [...this.state.todoList, this.state.userInput],
    userInput: ""
  });
}

  render() {
    let todoList = this.state.todoList.map((element, index) => {
      return <Todo key ={index} task={element} />;
    });  


    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <input placeholder="Enter new task"
               value   ={this.state.userInput} 
               onChange={ event => this.inputHandler(event.target.value) }></input>
        <button onClick={this.addList}>Add</button>

        {todoList}
      </div>
    );
  }
}

export default App;
