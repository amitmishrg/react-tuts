import React, { Component } from "react";
import Header from "../../components/header/index";
import Description from "../../components/description/index";
import Style from "./index.scss";

class Card extends Component {
  render() {
    let data = this.props.data;
    return (
      <section className="cards card1" id={this.props.id} key={this.props.id}>
        <Header name={(data && data.name) || "enter Your name"} />
        <Description desc={(data && data.desc) || "Enter you desc"} />
        <div className="intraction">
          <div className="one" />
          <div className="two" />
        </div>
        <div className="btn-wrapper">
          <i onClick={this.props.save} className="fa fa-save" />
          <i onClick={this.props.delete} className="fa fa-trash" />
        </div>
      </section>
    );
  }
}

export default Card;
