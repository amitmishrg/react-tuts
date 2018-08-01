import React, { Component } from "react";
import style from "./index.scss";

class Form extends Component {
  save(evt) {
    let refs = this.refs;
    this.props.save(refs);
  }

  render() {
    return (
      <div className="form-wrapper">
        <input ref="name" type="text" />
        <i onClick={this.save.bind(this)} className="fa fa-save" />
      </div>
    );
  }
}

export default Form;
