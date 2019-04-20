import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Hello from './pages/Hello';

class App extends Component {

  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/hello" component={Hello}></Route>
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;