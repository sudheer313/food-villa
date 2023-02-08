import { Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Axios from "./components/Axios";
import CardList from "./components/CardList";
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
import Home from "./pages/Home";
import Api from "./pages/Api";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      {/* <h1>Food villa</h1> */}
      {/* <MuiTypography /> */}
      {/* <Muibutton/> */}
      {/* <MuiNavbar1 />
      <CardList  /> */}
      {/* <Stack spacing={4} direction="row">
        <MuiCard />
        <MuiCard />
      </Stack> */}
      {/* <Axios /> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiLayout /> */}
      <BrowserRouter>
        <UserProvider value="Sudheer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<Api />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
