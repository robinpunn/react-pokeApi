import React, { Component } from "react";
import "./PokeList.css";
import Pokemon from "./Pokemon";
import getPokemon from "../services/api";

export default class PokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeArray: [],
    };
  }

  componentDidMount() {
    this.handlePokemonChange();
  }

  handlePokemonChange = async () => {
    const result = await getPokemon();
    console.log(result, result.typeData);
    this.setState({
      pokeArray: result.pokeArray,
    });
  };

  /*fetch pokemon from api*/
  render() {
    return (
      <div className="pokeList">
        {this.state.pokeArray.map((pokemon) => (
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
