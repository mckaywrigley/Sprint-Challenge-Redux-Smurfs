import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../actions";
import CreateSmurf from "./CreateSmurf";
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  componentDidUpdate() {
    this.props.getSmurfs();
  }

  removeSmurf = id => {
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
              <li>{smurf.name}</li>
              <li>{smurf.age}</li>
              <li>{smurf.height}</li>
              <button onClick={() => this.removeSmurf(smurf.id)}>Delete</button>
              <button>Edit</button>
            </div>
          );
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
  { getSmurfs, deleteSmurf }
)(App);
