import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
function MuiBreadcrumbs() {
  return (
    <Box m={2}>
      <Breadcrumbs arai-aria-label="breadcrumbs" maxItems={3} separator=">">
        <Typography color="text.primary">Products</Typography>
        <Typography color="text.primary">Approved Product</Typography>
        <Typography color="text.primary">View</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default MuiBreadcrumbs;
