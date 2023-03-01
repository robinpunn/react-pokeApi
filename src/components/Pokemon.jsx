import React, { Component } from "react";
import "./Pokemon.css";

export default class Pokemon extends Component {
  render() {
    const { name, pic, types } = this.props;
    return (
      <div className="pokemon">
        <img id="image" src={pic} alt="" />
        <h3 id="title">{name}</h3>
        <div className="types">{types[0]}</div>
      </div>
    );
  }
}
