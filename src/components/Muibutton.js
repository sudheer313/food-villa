import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import React from "react";

const Muibutton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<DirectionsCarIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          car
        </Button>
        <Button
          variant="contained"
          endIcon={<DirectionsCarIcon />}
          disableElevation
        >
          car
        </Button>
        <IconButton aria-label="car" color="success" size="small">
          <DirectionsCarIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("left")}>Left</Button>
          <Button onClick={() => alert("center")}>Center</Button>
          <Button onClick={() => alert("right")}>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Muibutton;
