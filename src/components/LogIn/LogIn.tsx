import React from "react";
import { Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { routs } from "../../AppRouts/сonstants/сonstants";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  Email: string;
  Password: string;
}

const LogIn = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
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
          error
          label="Error"
          defaultValue="Hello World"
          id="outlined-basic"
          variant="outlined"
          {...register("Email", { required: true, maxLength: 20 })}
        />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          {...register("Password", { pattern: /^[A-Za-z]+$/i })}
        />
      </Box>
      <Link to={routs.registration}>login</Link>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LogIn;
