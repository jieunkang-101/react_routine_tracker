import React, { Component } from 'react';
import './app.css';
import Routines from './components/routines';
import Navbar from './components/navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusCircle,
  faMinusCircle,
  faTrash,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle, faMinusCircle, faTrash, faTasks);

class App extends Component {
  state = {
    routines: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (routine) => {
    const routines = this.state.routines.map((item) => {
      if (item.id === routine.id) {
        return { ...routine, count: routine.count + 1 };
      }
      return item;
    });
    this.setState({ routines });
  };

  handleDecrement = (routine) => {
    const routines = this.state.routines.map((item) => {
      if (item.id === routine.id) {
        const count = routine.count - 1;
        return { ...routine, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ routines });
  };

  handleDelete = (routine) => {
    const routines = this.state.routines.filter(
      (item) => item.id !== routine.id
    );
    this.setState({ routines });
  };

  handleAdd = (name) => {
    const routines = [
      ...this.state.routines,
      { id: Date.now(), name, count: 0 },
    ];
    this.setState({ routines });
  };

  handleReset = () => {
    const routines = this.state.routines.map((routine) => {
      if (routine.count !== 0) {
        return { ...routine, count: 0 };
      }
      return routine;
    });
    this.setState({ routines });
  };
  render() {
    return (
      <>
        <Navbar />
        <Routines
          routines={this.state.routines}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
