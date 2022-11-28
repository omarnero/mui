import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
const MuiTextField = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="name" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="name" required />
        <TextField
          label="password"
          type="password"
          helperText="don't share yout password"
        />
        <TextField
          label="read only"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
