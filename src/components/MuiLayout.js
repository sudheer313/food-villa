import { Box } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        height: "100px",
        width: "100px",
        padding: "16px",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      code evolution
    </Box>
  );
};

export default MuiLayout;
