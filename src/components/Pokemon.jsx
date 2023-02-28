import React, { Component } from "react";
import PokeBall from "./PokeBall";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poke: "",
      sprites: "",
    };
  }
  random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  changePokemon = async () => {
    let pick = this.random(1, 150);
    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pick}`);
    let data = await resp.json();
    let pic = data.sprites.front_default;
    this.setState({
      poke: data.name,
      sprites: `${pic}`,
    });
  };

  change = () => {
    this.changePokemon();
  };
  /*fetch pokemon from api*/
  render() {
    return (
      <div className="pokemon">
        <h3 id="poke">{this.state.poke}</h3>
        <img src={this.state.sprites} alt={this.state.poke} />
        <PokeBall onClick={this.change} />
      </div>
    );
  }
}
