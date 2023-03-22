import React from "react";
import Form from "./Form";
import List from "./List";

const Home = () => {
  return (
    <div className="mt-12 flex flex-col lg:flex-row">
      <Form />
      <List />
    </div>
  );
};

export default Home;
