import React, { Component } from 'react';
import MainPage from "./containers/MainPage/MainPage";
import {Route, Switch} from "react-router-dom";
import NewMembersRegistrationPage from "./components/NewMembersRegistrationPage/NewMembersRegistrationPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/registration' exact component={NewMembersRegistrationPage}/>
      </Switch>
    );
  }
}

export default App;