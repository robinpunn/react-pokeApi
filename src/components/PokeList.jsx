import React, { Component } from "react";
import "./PokeList.css";
import Pokemon from "./Pokemon";

export default class PokeList extends Component {
  render() {
    const { pokeArray } = this.props;
    return (
      <div className="pokeList">
        {pokeArray.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            pic={pokemon.pic}
            types={pokemon.types}
            flavorText={pokemon.flavorText}
          />
        ))}
      </div>
    );
  }
}
