import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {routs} from "../../constants/routs";

import "./Registration.css";
import {useDispatch} from "react-redux";
import {userRegisterRequest} from "../../redux/actions/loginActions";

interface IFormInput {
    email: string;
    password: string;
}

export const Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        dispatch(userRegisterRequest(data))
        navigate(routs.login)
    };

    return (
        <div className={"wrapper"}>
            <form className="form-registration" onSubmit={handleSubmit(onSubmit)}>
                <h1>Registration</h1>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <TextField
                        margin="normal"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        {...register("email")}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        {...register("password")}
                    />
                </Box>
                <Link className="link" to={routs.login}>
                    Back to login
                </Link>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
