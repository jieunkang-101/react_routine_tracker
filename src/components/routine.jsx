import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Routine extends Component {
  state = {
    name: 'Reading',
    count: 3,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  handleDelete = () => {};

  render() {
    const { name, count } = this.props.routine;
    return (
      <li className="routine">
        <span className="routine-name">{name}</span>
        <span className="routine-count">{count}</span>
        <button
          className="routine-button routine-increase"
          onClick={this.handleIncrement}
        >
          <FontAwesomeIcon icon="plus-circle" />
        </button>
        <button className="routine-button routine-decrease">
          <FontAwesomeIcon icon="minus-circle" onClick={this.handleDecrement} />
        </button>
        <button className="routine-button routine-delete">
          <FontAwesomeIcon icon="trash" onClick={this.handleDelete} />
        </button>
      </li>
    );
  }
}

export default Routine;
