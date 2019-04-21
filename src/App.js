import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './pages/Hero';
import NotFound from './pages/NotFound';

class App extends Component {

  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/hero" component={Hero}></Route>

        <Route component={NotFound} />
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