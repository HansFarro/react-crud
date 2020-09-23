import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home />}></Route>
        <Route exact path="/about" component={() => <About />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
