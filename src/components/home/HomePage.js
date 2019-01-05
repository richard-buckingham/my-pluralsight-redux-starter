import React, { Component } from "react";
import { Link } from "react-router";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1> Pluralsight Administration</h1>
        <p>yada yada</p>
        <link to="about" className="btn btn-primary btn-large" />
      </div>
    );
  }
}

export default HomePage;
