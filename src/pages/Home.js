import React from "react";
import CardList from "../components/CardList";
import MuiNavbar1 from "../components/MuiNavbar1";

const Home = () => {
  return (
    <div>
      {<MuiNavbar1 />}
      <CardList />
    </div>
  );
};

export default Home;
