import React, { Component } from 'react';
import auth from './AuthInv';



class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "secret",
            result: false,
            invitation_data: "",
            code: props.match.params.code
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { code, password } = this.state;

        auth.login(code, password, (result) => {
            let updateLogin = this.props.updateLogin
            if (result){
                updateLogin(result)
                this.props.history.push("/quick_code_authd/")
            }
        })
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <p>SignIn</p>
                <form onSubmit={this.handleSubmit}>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
