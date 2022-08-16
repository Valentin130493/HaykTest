import React from "react";
import {Box, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {routs} from "../../constants/routs";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {userLoginRequest} from "../../redux/actions/loginActions";

import "./Login.css"


interface IFormInput {
    email: string;
    password: string;
}

export const LogIn = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        dispatch(userLoginRequest(data));
        navigate(routs.home)
    }

    return (
        <div className={"wrapper"}>
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <TextField
                        margin="normal"
                        label="Email"
                        id="outlined-basic"
                        variant="outlined"
                        {...register("email")}
                    />
                    <TextField
                        margin="normal"
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        {...register("password")}
                    />
                </Box>
                <Link className={"link"} to={routs.registration}>Registration</Link>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
};


