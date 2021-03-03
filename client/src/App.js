import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import NewGame from './components/NewGame';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Route exact path="/" component={NewGame} />
      </div>
    </Router>
  );
}

export default App;
