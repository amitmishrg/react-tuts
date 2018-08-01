import React, { Component } from "react";

const Description = props => {
  return (
    <div className="description">
      <p contenteditable="true">{props.desc}</p>
    </div>
  );
};

export default Description;
