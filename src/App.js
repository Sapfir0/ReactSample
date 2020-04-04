import React from 'react';
import logo from './logo.svg';
import './App.css';

function InputField({label, dataName, type, value, onChange}) {
    return (<label>
        {label}
        <input data-name={dataName} type={type} value={value} onChange={onChange} />
    </label>
    );
}

class RegisterWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.login + " " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputField label="Login" type="text" dataName="login" value={this.state.login}  onChange={e=> this.setState({login: e.target.value})} />
                <InputField label="Password" dataName="password" type="password" value={this.state.password}  onChange={e=> this.setState({password: e.target.value})} />

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
