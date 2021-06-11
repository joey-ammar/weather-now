/* import */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Introduction from "../Introduction/Introduction";
import Search from "../Search/Search";
import Weather from "../Weather/Weather";
/* Routes function */
const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Introduction />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/Weather">
            <Weather />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
/* Export */
export default Routes;
