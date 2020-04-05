import React, { Component } from 'react';
import InputField from "../component/InputField";
import InputForm from "../component/InputForm/InputForm";

function RegisterWindow(props) {
    return (
        <InputForm password={true} login={true} email={true}/>
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