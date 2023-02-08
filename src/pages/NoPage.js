import React from "react";

import { UserConsumer } from "../components/UserContext";

const NoPage = () => {
  return (
    <UserConsumer>
      {({ fname }) => {
        return <div>Hello {fname}</div>;
      }}
    </UserConsumer>
  );
};

export default NoPage;
