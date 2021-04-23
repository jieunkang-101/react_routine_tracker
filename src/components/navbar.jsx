import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = memo(({ totalCount }) => {
  console.log(totalCount);
  return (
    <nav className="navbar">
      <FontAwesomeIcon icon="tasks" className="navbar-logo" />
      <span>Routine Tracker</span>
      <span className="navbar-count">{totalCount}</span>
    </nav>
  );
});

export default Navbar;

// import React, { PureComponent } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// class Navbar extends PureComponent {
//   render() {
//     return (
//       <nav className="navbar">
//         <FontAwesomeIcon icon="tasks" className="navbar-logo" />
//         <span>Routine Tracker</span>
//         <span className="navbar-count">{this.props.totalCount}</span>
//       </nav>
//     );
//   }
// }

// export default Navbar;
