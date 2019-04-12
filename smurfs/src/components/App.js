import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf, createSmurf, editSmurf } from "../actions";
import CreateSmurf from "./CreateSmurf";
import EditSmurf from "./EditSmurf";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  componentDidUpdate() {
    this.props.getSmurfs();
  }

  editSmurf = id => {
    this.props.editSmurf(id, this.state);
  };

  removeSmurf = id => {
    this.props.deleteSmurf(id);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createSmurf(this.state);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <li>Name: {smurf.name}</li>
              <li>Age: {smurf.age}</li>
              <li>Height: {smurf.height}</li>
              <button onClick={() => this.removeSmurf(smurf.id)}>
                Delete Smurf
              </button>
              <button onClick={() => this.editSmurf(smurf.id)}>
                Change inputs then click to edit smurf
              </button>
            </div>
          );
        })}

        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="age"
              placeholder="age"
              value={this.state.age}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="height"
              placeholder="height"
              value={this.state.height}
              onChange={this.onChange}
            />
            <button onClick={this.onSubmit}>Add Smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf, editSmurf, createSmurf }
)(App);
