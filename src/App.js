import { Stack } from "@mui/material";
import "./App.css";
import Muibutton from "./components/Muibutton";
import MuiCard from "./components/MuiCard";
import MuiNavbar from "./components/MuiNavbar";
import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      {/* <h1>Food villa</h1> */}
      {/* <MuiTypography /> */}
      {/* <Muibutton/> */}
      {/* <MuiNavbar /> */}
      <Stack spacing={4} direction="row">
        <MuiCard />
        <MuiCard />
      </Stack>
    </div>
  );
}

export default App;
