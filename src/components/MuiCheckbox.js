import React from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const MuiCheckbox = () => {
  const [acceptTnc, setAcceptTnc] = useState("");
  const [skills, setSkills] = useState([]);
  console.log(skills);
  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else setSkills(skills.filter((skill) => skill !== event.target.value));
  };
  console.log(acceptTnc);
  const handleChange = (event) => {
    setAcceptTnc(event.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and coditions"
          control={
            <Checkbox
              checked={acceptTnc}
              onChange={handleChange}
              colour="secondary"
            />
          }
        />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon />}>
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        </Checkbox>
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  size="small"
                  colour="secondary"
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="JavaScript"
                  checked={skills.includes("JavaScript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
