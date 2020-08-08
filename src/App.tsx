import React from 'react';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Partners from './components/Partners/Partners';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"></Route>
      </Switch>
      <Partners></Partners>
      <Footer />
    </Router>
  );
}

export default App;
