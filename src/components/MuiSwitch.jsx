import React from "react";
import { Box, Switch, FormControlLabel } from "@mui/material";
import { useState } from "react";
function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const changeHandler = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="darkmood"
        control={<Switch checked={checked} onChange={changeHandler} />}
      />
    </Box>
  );
}

export default MuiSwitch;
