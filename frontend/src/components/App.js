import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FileUplod from './FileUpload';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route to='/' component={FileUpload} />
        </Switch>
      </Router>
    );
  }
}

export default App;
