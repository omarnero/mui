import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
function MuiRadioButton() {
  const [exp, setExp] = useState("");
  console.log(exp);
  const changeHandler = (e) => {
    setExp(e.target.value);
  };
  return (
    <Box>
      <FormControl id="job-experience-group-label">
        <FormLabel>slelct experince</FormLabel>
      </FormControl>
      <RadioGroup
        aria-labelledby="job-experience-group-label"
        name="job-experience-group"
        value={exp}
        onChange={changeHandler}
        row
      >
        <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
        <FormControlLabel control={<Radio />} label="2-5" value="2-5" />
        <FormControlLabel control={<Radio />} label="5-8" value="5-8" />
      </RadioGroup>
    </Box>
  );
}

export default MuiRadioButton;
