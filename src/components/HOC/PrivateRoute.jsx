import React from 'react'
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ component: Component }) => {

    const getToken = () => window.localStorage.getItem("token")

    function CheckToken(Component) {

        if (!getToken())
            return <Navigate to="/login" replace={true} />;

        return <Component />;
    }

    return CheckToken(Component)
}