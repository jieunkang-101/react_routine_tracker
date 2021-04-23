import React, { Component } from 'react';
import Routine from './routine';
import RoutineAddForm from './routineAddForm';

class Routines extends Component {
  render() {
    return (
      <div className="routines">
        <RoutineAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.routines.map((routine) => (
            <Routine
              key={routine.id}
              routine={routine}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="routines-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Routines;
