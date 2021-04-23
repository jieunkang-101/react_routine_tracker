import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Routine = memo(({ routine, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = () => {
    onIncrement(routine);
  };

  const handleDecrement = () => {
    onDecrement(routine);
  };

  const handleDelete = () => {
    onDelete(routine);
  };

  return (
    <li className="routine">
      <span className="routine-name">{routine.name}</span>
      <span className="routine-count">{routine.count}</span>
      <button
        className="routine-button routine-increase"
        onClick={handleIncrement}
      >
        <FontAwesomeIcon icon="plus-circle" />
      </button>
      <button className="routine-button routine-decrease">
        <FontAwesomeIcon icon="minus-circle" onClick={handleDecrement} />
      </button>
      <button className="routine-button routine-delete">
        <FontAwesomeIcon icon="trash" onClick={handleDelete} />
      </button>
    </li>
  );
});

export default Routine;

// import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// class Routine extends Component {
//   handleIncrement = () => {
//     this.props.onIncrement(this.props.routine);
//   };

//   handleDecrement = () => {
//     this.props.onDecrement(this.props.routine);
//   };

//   handleDelete = () => {
//     this.props.onDelete(this.props.routine);
//   };

//   render() {
//     const { name, count } = this.props.routine;
//     return (
//       <li className="routine">
//         <span className="routine-name">{name}</span>
//         <span className="routine-count">{count}</span>
//         <button
//           className="routine-button routine-increase"
//           onClick={this.handleIncrement}
//         >
//           <FontAwesomeIcon icon="plus-circle" />
//         </button>
//         <button className="routine-button routine-decrease">
//           <FontAwesomeIcon icon="minus-circle" onClick={this.handleDecrement} />
//         </button>
//         <button className="routine-button routine-delete">
//           <FontAwesomeIcon icon="trash" onClick={this.handleDelete} />
//         </button>
//       </li>
//     );
//   }
// }

// export default Routine;
