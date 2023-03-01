import React, { Component } from "react";
import PokeBall from "./PokeBall";
import "./Pokemon.css";
import changePokemon from "../services/api";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poke: "???",
      pic: "",
      hp_value: null,
      attack_value: null,
      defense_value: null,
      speed_value: null,
      types: [],
      typeData: [],
    };
  }
  /*fetch pokemon from api*/
  change = async () => {
    const result = await changePokemon();
    console.log(result, result.typeData);
    this.setState({
      poke: result.name,
      pic: result.pic,
      hp_value: result.hp_value,
      attack_value: result.attack_value,
      defense_value: result.defense_value,
      speed_value: result.speed_value,
      types: result.types,
      typeData: result.typeData,
    });
  };
  render() {
    return (
      <div>
        <h3 id="title">{this.state.poke}</h3>
        <div className="pokemon">
          <img id="image" src={this.state.pic} alt="" />
        </div>
        <PokeBall onClick={this.change} />
      </div>
    );
  }
}
