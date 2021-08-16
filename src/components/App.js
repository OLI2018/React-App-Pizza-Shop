import React from "react";
import Navbar from "./Navbar";
import TestimonialTab from "./TestimonialTab";
import OrderPizzaTab from "./OrderPizzaTab";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/OrderPizzaTab">
          <OrderPizzaTab />
        </Route>
        <Route exact path="/">
          <TestimonialTab />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

