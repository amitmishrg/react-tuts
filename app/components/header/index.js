import React, { Component } from "react";
import Style from "./index.scss";

const Header = props => {
  return (
    <header>
      <h4>{props.name}</h4>
    </header>
  );
};

export default Header;
