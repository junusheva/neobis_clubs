import React, { Component } from 'react';
import MainPage from "./containers/MainPage/MainPage";
import {Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={MainPage}/>
      </Switch>
    );
  }
}

export default App;