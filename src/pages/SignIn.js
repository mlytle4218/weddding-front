import React, { Component } from 'react';
import axios from 'axios';
import auth from './AuthUser';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: "",
            result: false,
            invitation_data: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password } = this.state;

        auth.login(email, password, (result) => {
            if (result) {
                // updateLogin(result)
                this.props.history.push("/master_listing_control/")
            }
        })
        event.preventDefault();
    }

    get_invitation_data(token) {
        axios.get(
            '/api/invitation',
            { headers: { "Authorization": "Bearer " + token } }
        ).then(response => {
            this.setState({
                invitation_data: response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        return (

            <div className="guestLogin">
                <div className="card">
                    <p>Admin Login</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-label-group">
                            <input
                                type="username"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            /></div>
                        <div className="form-label-group">

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
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

export default SignIn;
