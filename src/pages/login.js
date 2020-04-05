import React, {Component} from 'react';
import InputField from "../component/InputField"
import InputForm from "../component/InputForm/InputForm";
import styles from "./style.css"


function LoginWindow(props) {
    return (
        <InputForm password={true} login={true}/>
    );
}

class Login extends Component {
    render() {
        return (
            <LoginWindow/>
        );
    }
}

export default Login;