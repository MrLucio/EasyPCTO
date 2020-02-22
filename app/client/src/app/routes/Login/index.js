import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Business } from '../../actions/Business';
import HorizontalLoginForm from "components/HorizontalLoginForm";

class Login extends React.Component{


    render(){
        return (
            <HorizontalLoginForm/>
        )
    }
}

export default Login;