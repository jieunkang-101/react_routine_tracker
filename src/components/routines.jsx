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
  render() {
    return (
      <ul>
        {this.state.routines.map((routine) => (
          <Routine key={routine.id} routine={routine} />
        ))}
      </ul>
    );
  }
}

export default Routines;
