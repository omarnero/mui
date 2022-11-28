import React from "react";
import { Stack, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
function MuiAutoComplete() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
        onChange={(e, newvalue) => setValue(newvalue)}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
