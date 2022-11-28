import React, { forwardRef } from "react";
import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import { useState } from "react";
const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Sumbit
      </Button>
      {/* <Snackbar
        message="you are sumbit sucessfuly"
        open={open}
        autoHideDuration={4000}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      /> */}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
