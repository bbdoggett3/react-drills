import React, { Component } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List';

class App extends Component {
constructor() {
  super();

  this.state = {
    todoList: [],
  };

 
  this.handleAddTask = this.handleAddTask.bind(this);
}

handleAddTask(task) {
  this.setState({ list: [...this.state.todoList, task] });
}

  render() {

    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <NewTask add= {this.handleAddTask} />
        <List task = {this.state.todoList}/>
      </div>
    );
  }
}

export default App;
