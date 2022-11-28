import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
const MuiButton = () => {
  const [formText, setFormText] = useState();
  console.log(formText);
  const changeHadler = (e) => {
    console.log(e.target);
    if (e.target.value === undefined) return;
    setFormText(e.target.value);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display="block" direction="row" spacing={2}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          onClick={(e) => {
            alert("tota my lover for ever");
          }}
        >
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          send
        </Button>
        <IconButton size="small" aria-label="send" color="error">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="outlined" color="secondary" size="meduim">
          <Button>right</Button>
          <Button>center</Button>
          <Button>left</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text-formating"
          onChange={changeHadler}
          value={formText}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon value="bold" />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon value="italic" />
          </ToggleButton>
          <ToggleButton value="uderlined" aria-label="italic">
            <FormatUnderlinedIcon value="uderlined" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
