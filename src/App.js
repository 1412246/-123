import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageComponent from "./imageComponent";
import Map from "./mapComponent";

class App extends Component {
  render() {
    return (
      <div>
        <ImageComponent />
        <Map />
      </div>
    );
  }
}

export default App;
