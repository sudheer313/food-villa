import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const MuiNavbar1 = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="logo">
          <a href="/">
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Food villa."
              src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
            />
          </a>
        </IconButton>
        <Typography variant="h3" component="div" sx={{ flexGrow: "1" }}>
          Food Villa
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar1;
