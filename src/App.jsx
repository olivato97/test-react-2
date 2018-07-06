import React, { Component } from 'react';

import CounterCont from './containers/CounterCont'
import ToDoListCont from './containers/ToDoListCont'

class App extends Component {
  render() {
    
    return (
      <div>
        <CounterCont />
        <hr />
        <ToDoListCont />
      </div>
    );
  }
}

export default App;
