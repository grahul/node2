import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import MasterPage from "./pages/MasterPage";

import Default from "./pages/Default";
import Competitor from "./pages/Competitor";
import Custom from "./pages/Custom";
import Diversity from "./pages/Diversity";
import Location from "./pages/Location";
import School from "./pages/School";
import Usage from "./pages/Usage";
const app = document.getElementById('app');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MasterPage}>
      <IndexRoute component={Default}></IndexRoute>
      <Route path="competitor" name="competitor" component={Competitor}></Route>
      <Route path="custom" name="custom" component={Custom}></Route>
      <Route path="diversity" name="diversity" component={Diversity}></Route>
      <Route path="location" name="location" component={Location}></Route>
      <Route path="school" name="school" component={School}></Route>
      <Route path="usage" name="usage" component={Usage}></Route>
    </Route>
  </Router>,
app);
