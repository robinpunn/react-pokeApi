import React, { Component } from "react";
import "./Pokeball.css";

export default class PokeBall extends Component {
  render(props) {
    return (
      <div className="pokeball">
        <button className="ball" onClick={this.props.onClick}></button>
      </div>
    );
  }
}
