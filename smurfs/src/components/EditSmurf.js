import React, { Component } from "react";
import { connect } from "react-redux";
import { editSmurf } from "../actions";

class CreateSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

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
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { editSmurf }
)(CreateSmurf);
