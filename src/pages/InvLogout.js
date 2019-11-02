import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from './AuthInv';

export default class InvLogout extends Component {
    componentWillMount() {
        auth.logout(() => {
            this.props.updateLogin(false)
        })
    }
    render() {
        return (
            <Redirect to="/" />
        )
    }
}


