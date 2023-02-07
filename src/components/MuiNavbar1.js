import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Box,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { React, useState } from "react";
import logo from "../utils/foodvilla.jpg";
import "../App.css";

const MuiNavbar1 = () => {
  const [anchorE1, setAnchorE1] = useState("");
  const open = Boolean(anchorE1);
  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="logo">
          <a href="/">
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Food villa."
              // src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
              src={logo}
            />
          </a>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: "1" }}>
          Food Villa
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link className="link" to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/Api">
            <Button color="inherit">Api</Button>
          </Link>
          <Link to="/">
            <Button color="inherit">About</Button>
          </Link>

          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Link to="/login">
            <Button color="inherit">login</Button>
          </Link>
        </Stack>
        <Menu
          id="resources-menu"
          anchorE1={anchorE1}
          open={open}
          MenuListProps={{ "aria-labelledby": "resource-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar1;
