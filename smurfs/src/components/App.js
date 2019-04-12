import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import CreateSmurf from "./CreateSmurf";
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          return <li key={smurf.name}>{smurf.name}</li>;
        })}
        <CreateSmurf />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
