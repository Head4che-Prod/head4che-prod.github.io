import React, { Component } from "react";
import "./index.scss";

class InexistantPage extends Component {
  render() {
    return (
      <div class="err404">
        <h1>Erreur 404</h1>
        <img id="logo" src="./assets/exploding_camel.png" alt="Camel exploding logo"></img>
        <h1>
          Oups ! La page que vous cherchez n'existe pas
        </h1>
      </div>
    );
  }
}

export default InexistantPage;