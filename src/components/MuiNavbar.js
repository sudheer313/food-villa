import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          FOODVILLA
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
