import React from "react";
import Axios from "../components/Axios";
import { UserConsumer } from "../components/UserContext";

const Api = () => {
  return (
    <UserConsumer>
      {(user) => {
        return <div>hello{user} <Axios/></div>;
      }}
    </UserConsumer>
  );
};

export default Api;
