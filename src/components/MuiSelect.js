import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  console.log({ countries });
  const handleChange = (event) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        {/* we usually get data from API and map it accordingly using map function */}
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="Aus">Austrlia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
