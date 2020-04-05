import React, {Component} from 'react';
import InputField from "../InputFields/InputField"
import {post} from "../../router";
import "./style.css"

class InputForm extends React.Component {
    constructor(props) {
        super(props);

        let propseWithoutValues = {...props};

        for (let key in propseWithoutValues) {
            propseWithoutValues[key] = "";
        }

        this.state = {...propseWithoutValues};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        post('register', this.state).then((json) => {
            console.log(json)
        })
    }


    render() {
        let email = ' ';
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
                    <input type="submit" value="Submit" className="submit"/>
                </form>
        );
    }
}


export default InputForm;