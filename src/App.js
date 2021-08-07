import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/cutomers";
import Rentals from "./components/Rentals";
import NotFound from "./components/notFound";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
