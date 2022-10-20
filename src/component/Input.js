import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ label, ...rest }) => {
  return <TextField {...rest} label={label} />;
};

export default Input;
