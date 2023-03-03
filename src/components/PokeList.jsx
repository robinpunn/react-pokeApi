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
            hp_value={pokemon.hp_value}
            attack_value={pokemon.attack_value}
            defense_value={pokemon.defense_value}
            speed_value={pokemon.speed_value}
            types={pokemon.types}
            flavorText={pokemon.flavorText}
            typeData={pokemon.typeData}
          />
        ))}
      </div>
    );
  }
}
