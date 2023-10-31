import React, { Component } from 'react';
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { incrementCount } from './Slice'

export default class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
// export default function HistoryPage() {
//   const { count } = useAppSelector((rootState) => {
//     let count = rootState.historyPage.count;
//     return { count };
//   });
//   const dispatch = useAppDispatch();

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch(incrementCount())}>Increment</button>
//     </div>
//   );
// }
