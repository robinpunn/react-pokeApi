import React, { Component } from "react";
import Pokemon from "./Pokemon";
import "./Battle.css";

export default class Battle extends Component {
  render() {
    return (
      <div className="battle">
        <Pokemon />
        <Pokemon />
      </div>
    );
  }
}
