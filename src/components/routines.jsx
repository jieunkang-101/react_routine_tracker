import React, { Component } from 'react';
import Routine from './routine';

class Routines extends Component {
  state = {
    routines: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (routine) => {
    const routines = [...this.state.routines];
    const index = routines.indexOf(routine);
    routines[index].count++; // should update later! Do not update state object itself
    this.setState({ routines });
  };

  handleDecrement = (routine) => {
    const routines = [...this.state.routines];
    const index = routines.indexOf(routine);
    const count = routines[index].count - 1; // should update later! Do not update state object itself
    routines[index].count = count < 0 ? 0 : count;
    this.setState({ routines });
  };

  handleDelete = (routine) => {
    const routines = this.state.routines.filter(
      (item) => item.id !== routine.id
    );
    this.setState({ routines });
  };

  render() {
    return (
      <ul>
        {this.state.routines.map((routine) => (
          <Routine
            key={routine.id}
            routine={routine}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Routines;
