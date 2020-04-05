import React, { Component } from 'react';
import InputForm from "../component/InputForm/InputForm";

function RegisterWindow(props) {
    return (
        <InputForm password login email/>
    );
}

class Register extends Component {
    render() {
        return (
            <RegisterWindow/>
        );
    }
}

export default Register;