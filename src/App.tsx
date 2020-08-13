import React from 'react';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Partners from './components/Partners/Partners';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Partners></Partners>
      <Footer />
    </Router>
  );
}

export default App;
