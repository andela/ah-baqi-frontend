import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <br />
    <Link to="/login">Login</Link>
    <hr />
    Welcome to the home page
  </div>
);

export default Home;