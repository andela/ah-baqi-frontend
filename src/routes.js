import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './containers/home/Home';
import Header from './containers/header/Header';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Route path="/" exact component={Home} />
  </BrowserRouter>
);

export default Routes;
