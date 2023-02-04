import { Stack } from "@mui/material";
import "./App.css";
import Muibutton from "./components/Muibutton";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiLayout from "./components/MuiLayout";
import MuiNavbar from "./components/MuiNavbar";
import MuiNavbar1 from "./components/MuiNavbar1";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiSelect from "./components/MuiSelect";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      {/* <h1>Food villa</h1> */}
      {/* <MuiTypography /> */}
      {/* <Muibutton/> */}
      <MuiNavbar1 />
      {/* <Stack spacing={4} direction="row">
        <MuiCard />
        <MuiCard />
      </Stack> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiLayout /> */}
    </div>
  );
}

export default App;
