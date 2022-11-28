import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
function MuiSelect() {
  const [con, setCon] = useState([""]);

  const changeHandler = (e) => {
    const value = e.target.value;
    setCon(typeof value === "string" ? value.split(",") : value);
  };
  //   console.log(con);
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        value={con}
        onChange={changeHandler}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
