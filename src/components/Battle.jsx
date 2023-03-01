import React, { Component } from "react";
import Pokemon from "./Pokemon";
import "./Battle.css";

export default class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeA: [],
      pokeB: [],
    };
  }
  /*fetch pokemon from api*/
  render() {
    return (
      <div className="battle">
        <div className="red">
          <Pokemon />
        </div>
        <div className="vs">
          <h1>VS</h1>
        </div>
        <div className="blue">
          <Pokemon />
        </div>
      </div>
    );
  }
}
