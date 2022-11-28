import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

function MuiCheckbox() {
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(
        skills.filter((skill) => {
          return skill !== e.target.value;
        })
      );
    }
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel>Skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="html"
                checked={skills.includes("html")}
                onChange={handleSkillChange}
              />
            }
            label="HTML"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="css"
                checked={skills.includes("css")}
                onChange={handleSkillChange}
              />
            }
            label="CSS"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="javascript"
                checked={skills.includes("javascript")}
                onChange={handleSkillChange}
              />
            }
            label="JavaScript"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
export default MuiCheckbox;
