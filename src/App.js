import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Nav from "./components/Nav";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import ReactDOM from "react-dom/client";
import { Switch, Route, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";

export default class App extends Component {
  // name = 'ALi'

  render() {
    return (
      <div>
        {/* <News pageSize={6} country="us" category="sports"></News> */}
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Component}>
              <News pageSize={6} country="us" category="general"></News>
            </Route>
            <Route path="/business">
              <News pageSize={6} country="us" category="business"></News>
            </Route>
            <Route path="/entertainment">
              <News pageSize={6} country="us" category="entertainment"></News>
            </Route>
            <Route path="/general">
              <News pageSize={6} country="us" category="general"></News>
            </Route>
            <Route path="/health">
              <News pageSize={6} country="us" category="health"></News>
            </Route>
            <Route path="/science">
              <News pageSize={6} country="us" category="science"></News>
            </Route>
            <Route path="/sports">
              <News pageSize={6} country="us" category="sports"></News>
            </Route>
            <Route path="/technology">
              <News pageSize={6} country="us" category="technology"></News>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
