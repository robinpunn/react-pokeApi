import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    const { clear, fetch } = this.props;
    return (
      <div className="footer">
        <p>
          created with <a href="https://pokeapi.co/">PokeApi</a>
        </p>
        <div className="buttons">
          <button className="clear" onClick={clear}>
            Clear Local Storage
          </button>
          <button className="fetch" onClick={fetch}>
            Catch Them All
          </button>
        </div>
      </div>
    );
  }
}
