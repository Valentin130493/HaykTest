import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { routs } from "../../AppRouts/сonstants/сonstants";

interface IFormInput {
  Email: string;
  Password: string;
}

export const Registration = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
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
      <button type="submit">Submit</button>
      <Link to={routs.login}>login</Link>
      {/*<label>First Name</label>*/}
      {/*<input {...register("firstName")} />*/}
      {/*<label>Gender Selection</label>*/}
      {/*<input type="submit" />*/}
    </form>
  );
};
