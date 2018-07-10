import React, { Component } from 'react';

import CounterCont from './containers/CounterCont'
import ToDoListCont from './containers/ToDoListCont'
import LogInCont  from './containers/LogInCont'
import LogInStatusCont  from './containers/LogInStatusCont'

class App extends Component {
  render() {

    return (
      <div>
        <CounterCont />
        <hr />
        <ToDoListCont />
        <hr />
        <LogInStatusCont />
        <hr />
        <LogInCont />
      </div>
    );
  }
}

export default App;
