import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Api from './pages/Api';

class App extends Component {

  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/api" component={Api}></Route>
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