import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './app';
import logo from './logo.svg';
import './App.css';

function MainApp() {
  return (
    <Router>
      <Route path="/" component={App}/>
    </Router>
  )
}

export default hot(MainApp);
