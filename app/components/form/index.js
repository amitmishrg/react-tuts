import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  save() {
    let refs = this.textInput.current;
    this.props.save(refs);
  }

  render() {
    return (
      <div className="form-wrapper">
        <input ref={this.textInput} type="text" />
        <i onClick={this.save.bind(this)} className="fa fa-save" />
      </div>
    );
  }
}

Form.propTypes = {
  save: PropTypes.func
};

export default Form;
