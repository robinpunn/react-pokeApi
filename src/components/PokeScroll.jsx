import React, { Component } from "react";
import "./PokeScroll.css";

export default class PokeScroll extends Component {
  render() {
    console.log(this.props);
    return <div className="poke-scroll">{this.props.children}</div>;
  }
}
