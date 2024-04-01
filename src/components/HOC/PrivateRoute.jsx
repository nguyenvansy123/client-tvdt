import React from 'react'
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element: Element, isAuth, ...rest }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/signin", { replace: true });
        }
    }, [isAuth, navigate]);

    return isAuth ? <Outlet /> : <h1>Authenticated</h1>;
};

export default PrivateRoute;