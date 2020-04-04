import React from 'react';
import logo from './logo.svg';
import './App.css';

function InputField({label, type, value, onChange}) {
    return (<label>
        {label}
        <input type={type} value={value} onChange={onChange} />
    </label>
    );
}

class RegisterWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChangeLogin(event) {
    //     this.setState({login: event.target.value});
    // }
    //
    // handleChangePassword(event) {
    //     this.setState({password: event.target.value});
    // }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.login + " " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputField label="Login" type="text" value={this.state.login}  onChange={this.handleChangeLogin} />
                <InputField label="Password" type="password" value={this.state.password}  onChange={this.handleChangePassword} />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                <RegisterWindow/>
            </header>
        </div>
    );
}

export default App;
