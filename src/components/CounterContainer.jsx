import React, { Component } from 'react';
import Counter from './Counter';

export class CounterContainer extends Component {
  //   state = {
  //     counters: [
  //       { id: 1, value: 4 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //     ],
  //   };
  // Passing data to components (props) -> attribtes with values
  // <Counter key={counter.id} value={counter.value} />

  // props children
  // eg: Dialog Box
  // <Counter key={counter.id} value={counter.value}>
  // <h4>Counter</h4>
  // </Counter>
  // {this.props.children}

  // React Dev Tools

  // props Vs state
  // props -> data that gives to component. It  is read-only.
  // state -> data which is private to component

  // NOTE: The component that owns a piece of state, should be the one modifying it
  // Raising the event and Handling the event
  // Updating the state

  // Single Source of Truth
  // Removing the local state
  // Controlled Components -> gets data and raises events

  // Multiple Components in Sync -> Lifting the state up

  //   handleReset = () => {
  //     let counters = this.state.counters.map((counter) => ({
  //       id: counter.id,
  //       value: 0,
  //     }));
  //     this.setState({ counters });
  //   };

  //   handleIncrement = (counter) => {
  //     const counters = [...this.state.counters];
  //     const index = counters.findIndex((c) => c.id === counter.id);
  //     counters[index] = { ...counter };
  //     counters[index].value++;
  //     this.setState({ counters });
  //   };

  //   handleDelete = (id) => {
  //     const counters = this.state.counters.filter((counter) => counter.id !== id);
  //     this.setState({ counters });
  //   };

  render() {
    return (
      <>
        <button
          onClick={this.props.onReset}
          className='btn btn-md btn-info m-3'
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </>
    );
  }
}

export default CounterContainer;
