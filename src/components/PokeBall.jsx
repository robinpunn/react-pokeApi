import React, { Component } from "react";
import "./Pokeball.css";

export default class PokeBall extends Component {
  render(props) {
    return (
      <div className="pokeball">
        <button onClick={this.props.onClick}></button>
      </div>
    );
  }
}
