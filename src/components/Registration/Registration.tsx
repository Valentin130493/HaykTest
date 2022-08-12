import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { routs } from "../../AppRouts/сonstants/сonstants";

import "./Registration.css";

interface IFormInput {
  Email: string;
  Password: string;
}

export const Registration = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
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
          {...register("Email", { required: true, maxLength: 20 })}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          {...register("Password", { pattern: /^[A-Za-z]+$/i })}
        />
      </Box>
      <Link className="link" to={routs.login}>
        Back to login
      </Link>
      <button type="submit">Submit</button>
    </form>
  );
};
