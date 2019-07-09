import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Profile from './containers/profile/Profile';
import Home from './containers/home/Home';
import Header from './containers/header/Header';


const Routes = () => (
  <BrowserRouter>
    <Header />
    <Route path="/profile" exact component={Profile} />
    <Route path="/" exact component={Home} />
  </BrowserRouter>
);

export default Routes;
