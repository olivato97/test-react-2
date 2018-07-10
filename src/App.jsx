import React, { Component } from 'react';

import CounterCont from './containers/CounterCont'
import ToDoListCont from './containers/ToDoListCont'
import {LogInCont2,LogInStatusComp2} from './containers/LogInCont'

class App extends Component {
  render() {

    return (
      <div>
        <CounterCont />
        <hr />
        <ToDoListCont />
        <hr />
        <LogInStatusComp2 />
        <hr />
        <LogInCont2 />
      </div>
    );
  }
}

export default App;
