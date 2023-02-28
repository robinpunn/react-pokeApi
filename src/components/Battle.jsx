import React, { Component } from "react";
import Pokemon from "./Pokemon";
import "./Battle.css";

export default class Battle extends Component {
  render() {
    return (
      <div className="battle">
        <div className="red">
          <Pokemon />
        </div>
        <div className="blue">
          <Pokemon />
        </div>
      </div>
    );
  }
}
