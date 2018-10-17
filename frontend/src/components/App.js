import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route to='/' component={Homepage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
