import React, { Component } from "react";

const Welcome = props => {
  return <h1>Hello {props.name}</h1>;
};

const App = props => {
  return (
    <React.Fragment>
      <Welcome name="Amit" />
      <Welcome name="Rahul" />
      <Welcome name="John" />
    </React.Fragment>
  );
};

export default App;
