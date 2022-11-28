import React from "react";
import { Box, Stack, Grid, Paper } from "@mui/material";
function MuiLayout() {
  return (
    <Paper>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            height: "100px",
            width: "100px",
            padding: "16px",
            color: "white",
          }}
          className="box"
        >
          love tota
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            height: "100px",
            width: "100px",
            padding: "16px",
            color: "white",
          }}
          className="box"
        >
          love tota
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item bgcolor="primary.light" p={2} sm={3} xs={6}>
          tota
        </Grid>
        <Grid item bgcolor="primary.light" p={2} sm={3} xs={6}>
          tota
        </Grid>
        <Grid item bgcolor="primary.light" p={2} sm={3} xs={6}>
          tota
        </Grid>
        <Grid item bgcolor="primary.light" p={2} sm={3} xs={6}>
          tota
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MuiLayout;
