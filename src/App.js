import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event, value);
  };

  return (
    <div className="App">
      <h1>Food villa</h1>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" />
          <Tab label="" />
          <Tab label="" />
        </Tabs>
      </Box>
    </div>
  );
}

export default App;
