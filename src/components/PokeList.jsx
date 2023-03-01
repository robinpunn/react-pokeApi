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
            name={pokemon.name}
            pic={pokemon.pic}
            types={pokemon.types}
          />
        ))}
      </div>
    );
  }
}
