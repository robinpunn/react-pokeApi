import React, { Component } from "react";
import "./App.css";
import PokeList from "./components/PokeList";
import PokeSearch from "./components/PokeSearch";
import getPokemon from "./services/api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeArray: [],
      searchField: "",
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

  render() {
    return (
      <div className="App">
        <h1>pokeDEX</h1>
        <PokeSearch searchField={this.state.searchField} />
        <PokeList pokeArray={this.state.pokeArray} />
      </div>
    );
  }
}
