// import React, { Component } from 'react';

// Stateless Functional Component
// Destructuring

import React from 'react';

function Navbar({ totalCounters }) {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1'>
          Navbar <span className='badge bg-success'>{totalCounters}</span>
        </span>
      </div>
    </nav>
  );
}

// export class Navbar extends Component {
//   render() {
//     return (
//       <nav className='navbar navbar-light bg-light'>
//         <div className='container-fluid'>
//           <span className='navbar-brand mb-0 h1'>
//             Navbar{' '}
//             <span class='badge bg-success'>{this.props.selectedCounters}</span>
//           </span>
//         </div>
//       </nav>
//     );
//   }
// }

export default Navbar;

// Life Cycle Hooks
/*
Component will go through different phases during life cycle of component.
1) Mounting - Creating Instance of component to putting into DOM
2) Updating - After changing the state, modifying the DOM
3) Unmounting - When component is removing from DOM

React will call some methods of component automatically during this phase. -> Life Cycle Hooks
We can take advantage of this, we can write whatever we need in hooks to workcomponent properly.

Mounting
 constructor
 render
 componentDidMount

Updating
 render
 componentDidUpdate

Unmounting
 componentWillUnmount

Ref: https://programmingwithmosh.com/javascript/react-lifecycle-methods/
*/
