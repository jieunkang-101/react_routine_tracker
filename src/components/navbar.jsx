import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <FontAwesomeIcon icon="tasks" className="navbar-logo" />

        <span>Routine Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
