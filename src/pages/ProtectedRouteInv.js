import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./AuthInv";

export const ProtectedRouteInv = ({component: Component, updateLogin, ...rest}) => {
    return (
        <Route {...rest} render={props => {
                if (auth.isAuth()) {
                    return <Component {...props} updateLogin = {updateLogin} />;
                } else {
                    return (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    );
                }
            }}
        />
    );
};