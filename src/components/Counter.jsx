import React, { Component } from 'react';
import 'bootstrap-icons/icons/alarm.svg';

class Counter extends Component {
  // State - special property in component
  //   state = {
  //     value: this.props.counter.value,
  //     imageUrl: 'https://picsum.photos/200',
  //     tags: [
  //       { name: 'tag1', id: 1 },
  //       { name: 'tag2', id: 2 },
  //       { name: 'tag3', id: 3 },
  //     ],
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag.id}>{tag.name}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  handleIncrement = (event, parameter) => {
    // Binding Event Handlers
    // Object.method() -> this refers to Object
    // function() -> this refers to Window. In strict mode, this is undefined

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // Experimental - Arrow function syntax works
    // console.log('Handle Increment Button', this);

    // Updating the State
    this.setState({ value: this.state.value + 1 });

    // What happens when state is updated?
    // setState tells react that is state is getting changed.
    // React calls reander method asynchronously
    // React takes new JSX (new VDOM) and compares with old JSX (old VDOM) and modifies real DOM

    // Passing Event Arguments
    // by default event argument will be send to event handler
    console.log(event, parameter);
  };

  render() {
    // Specifying JSX children
    // React.Fragment
    // Embedding JS Expressions

    // Setting attributes
    // <img src={this.state.imageUrl} alt='A Random Pic' />

    // className and styles
    // styles = {
    // fontSize: 10,
    // }
    // <span style={this.styles}>{this.formatCounter()}</span>
    // <span style={{fontSize: 30}} >{this.formatCounter()}</span>

    // Render classes dynamically
    // Rendering Lists
    // <ul>
    //  {this.state.tags.map((tag) => (
    //      <li key={tag.id}>{tag.name}</li>
    //  ))}
    // </ul>

    // Conditional rendering
    // if-else
    // terinary operator
    // truthy and falsy values

    // Handling Events
    // Based on DOM events, all jSX elements have properties to handle DOM events

    // Using Bootstrap Icons

    return (
      <div style={{ width: '400px' }} className='row'>
        <div className='col-2'>
          <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        </div>
        <div className='col'>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className='btn btn-sm btn-secondary m-1'
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className='btn btn-sm btn-secondary m-1'
            disabled={this.props.counter.value <= 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm m-1'
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let badgeClasses = 'badge m-2 bg-';
    badgeClasses += this.props.counter.value === 0 ? 'warning' : 'primary';
    return badgeClasses;
  }

  formatCounter() {
    // Object Destructuring
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
