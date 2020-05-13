import React, {Component} from 'react';

class Login extends Component {
constructor() {
    super();

    this.state = {
        userName: "",
        password: ""
    }

    this.loginButton = this.loginButton.bind(this);
}

nameHandler(val) {
    this.setState({userName: val})
}

passwordHandler(val) {
    this.setState({password: val})
}

loginButton() {
    alert( `Username: ${this.state.userName} Password: ${this.state.password}`)
}

    render() {
        return(
            <div>
                <input placeholder ="user name" 
                       onChange    ={ event => this.nameHandler(event.target.value) }
                       type = "text">

                </input>
                <input placeholder ="password"
                       onChange    ={ event => this.passwordHandler(event.target.value) }
                       type = "password">
                </input>
                <button onClick = {this.loginButton}>Login</button>
            </div>
        );
    }
}

export default Login;