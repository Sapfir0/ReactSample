import React, {Component} from 'react';
import InputField from "../InputField"


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.state = {props};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.login + " " + this.state.password);
        event.preventDefault();
    }

    render() {
        let email = '';
        if (this.props.email) {
            email = <InputField label="Email" type="text" value={this.state.email}
                        onChange={e => this.setState({email: e.target.value})}/>

        }
        return (
            <form onSubmit={this.handleSubmit}>
                {email}
                <p> </p>
                <InputField label="Login" type="text" value={this.state.login}
                            onChange={e => this.setState({login: e.target.value})}/>
                <p> </p>
                <InputField label="Password" type="password" value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}/>
                <p> </p>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}


export default InputForm;