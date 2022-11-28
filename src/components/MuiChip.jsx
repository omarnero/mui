import React from "react";
import { Stack, Chip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
function MuiChip() {
  return (
    <Stack direction="row" spacing={2}>
      <Chip label="tota" icon={<FaceIcon />} color="primary" size="small" />
      <Chip
        label="delete"
        color="error"
        size="small"
        onClick={() => {
          alert("click hamdler");
        }}
        onDelete={() => {
          alert("delte handler");
        }}
      />
    </Stack>
  );
}

export default MuiChip;
