import React, { Component } from 'react';
import auth from './AuthInv';



export default class GuestLogin extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        auth.login(this.state.code, this.state.password, (result) => {
            if (result) {
                this.props.updateLogin(result)
                this.props.history.push("/quick_code_authd/")
            }
        })
        event.preventDefault();
    }


    render() {
        return (
            <div className="guestLogin">
                <div className="card">
                    <p>Guest Login</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-label-group">
                            <input
                                type="text"
                                name="code"
                                placeholder="QuickCode"
                                onChange={this.handleChange}
                                required
                            /></div>
                        <div className="form-label-group">

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                required
                            /></div>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}


