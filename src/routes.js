import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';

const Routes = () => (
  <BrowserRouter>
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={Home} />
  </BrowserRouter>
);

export default Routes;
