import React, { Component } from 'react';

class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            userInput: ""
        }

        //Bind will go here from my add
        this.addList = this.addList.bind(this);
    }

    handleInputChange(value) {
        this.setState({ userInput: value });
      }
    
    addList() {
        this.props.add(this.state.userInput);
        this.setState({userInput: ""})
      }
    
    render() {
        return(
        <div>
        <input
          value={this.state.userInput}
          placeholder="Enter new task"
          onChange={event => this.handleInputChange(event.target.value)}/>
        <button onClick={this.addList}>Add</button>
        </div>
        )
    }
}

export default NewTask;