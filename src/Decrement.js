import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number };
    this.decrement = this.decrement.bind(this);
  }

  // Function to decrement the number in state by a value of 1 when button clicked
  decrement() {
    if (this.state.number === 0) alert("Cannot be less than zero.");
    else {
      this.setState((state) => ({
        number: state.number - 1,
      }));
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

// Sets type for props
Decrement.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Decrement;
