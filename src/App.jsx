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
    const pokeArray = localStorage.getItem("pokeArray");
    if (pokeArray) {
      this.setState({
        pokeArray: JSON.parse(pokeArray),
      });
    } else {
      this.handlePokemonChange();
    }
  }

  handlePokemonChange = async () => {
    const result = await getPokemon();
    console.log(result, result.typeData);
    localStorage.setItem("pokeArray", JSON.stringify(result.pokeArray));
    this.setState({
      pokeArray: result.pokeArray,
    });
  };

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  handleClearLocalStorage = () => {
    localStorage.removeItem("pokeArray");
    this.setState({
      pokeArray: [],
    });
  };

  render() {
    const filteredPokeArray = this.state.pokeArray.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>the OG pokeDEX</h1>
        <PokeSearch onSearchChange={this.onSearchChange} />
        <PokeList pokeArray={filteredPokeArray} />
      </div>
    );
  }
}
