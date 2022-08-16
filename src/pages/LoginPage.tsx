import React from "react";
import {LogIn} from "../components/LogIn/LogIn";


import {useLocation} from "react-router-dom";
import {routs} from "../constants/routs";
import {Registration} from "../components/Registration/Registration";


export const LoginPage = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname === routs.login ? <LogIn/> : <Registration/>}
        </>
    );
};
