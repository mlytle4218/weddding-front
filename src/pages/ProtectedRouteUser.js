import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./AuthUser";

export const ProtectedRouteUser = ({component: Component, updateLogin, ...rest}) => {
    return (
        <Route {...rest} render={props => {
                if (auth.isAuth()) {
                    return <Component {...props} updateLogin = {updateLogin} />;
                } else {
                    return (
                        <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
                    );
                }
            }}
        />
    );
};