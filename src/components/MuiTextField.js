import { Stack, TextField, InputAdornment } from "@mui/material";
import React from "react";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={
              !value ? "Required" : "Do not share your password with anyone"
            }
          />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Form Input"
          helperText="DO NOT SHOW YOUR PASSWORD TO ANYONE   "
        />
        <TextField
          label="Password"
          type="password"
          helperText="DO NOT SHOW YOUR PASSWORD TO ANYONE   "
          disabled
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kgs</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
