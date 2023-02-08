import React from "react";

import { UserConsumer } from "../components/UserContext";

const NoPage = () => {
  return (
    <UserConsumer>
      {(username) => {
        return <div>Hello {username}</div>;
      }}
    </UserConsumer>
  );
};

export default NoPage;
