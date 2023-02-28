import React, { Component } from "react";

export default class PokeBall extends Component {
  render(props) {
    return (
      <div>
        {/*use props for click*/}
        <button onClick={this.props.onClick}></button>
      </div>
    );
  }
}
