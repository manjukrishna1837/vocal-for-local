/** @format */

import React from "react";
import Home from "./Home";
import Header from "./Header";
import Addstore from "./Addstore";

import Desc from "./Description";

import SearchPage from "./SearchPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/desc">
              <Desc/>
          </Route>
          <Route path="/addstore">
              <Addstore/>
          </Route>
          <Route path="/">
              <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
