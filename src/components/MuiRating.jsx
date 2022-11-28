import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
function MuiRating() {
  const [rate, setRate] = useState(0);
  console.log(rate);
  const changeHandler = (e) => {
    setRate(e.target.value);
  };
  return (
    <Stack>
      <Rating value={rate} onChange={changeHandler} precision={0.5} />
    </Stack>
  );
}

export default MuiRating;
