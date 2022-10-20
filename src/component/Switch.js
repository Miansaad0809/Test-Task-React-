import React from "react";
import {
  Switch as MuiSwitch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const Switch = ({ label, ...rest }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<MuiSwitch {...rest} />} label={label} />
    </FormGroup>
  );
};

export default Switch;
