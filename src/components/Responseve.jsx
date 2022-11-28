import React from "react";
import { Box } from "@mui/material";
export const Responseve = () => {
  return (
    <Box
      sx={{
        height: "200px",
        bgcolor: "primary.main",
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500,
        },
      }}
    ></Box>
  );
};
