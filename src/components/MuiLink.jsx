import React from "react";
import { Stack, Link } from "@mui/material";
const MuiLink = () => {
  return (
    <Stack direction="row" spacing={2} m={4}>
      <Link href="#">Link </Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
    </Stack>
  );
};

export default MuiLink;
