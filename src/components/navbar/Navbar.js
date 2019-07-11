import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';

const { Header } = Layout;
const { Item } = Menu;

const Navbar = ({ clickedLogin = null, clickedSignup = null }) => (
  <Layout className="nav">
    <Header className="nav">
      <Link to="/" className="logo">
                    Author&rsquo;s Haven
      </Link>
      {localStorage.getItem('isLoggedIn')
        ? (
          <Menu mode="horizontal" style={{ float: 'right' }}>
            <Item>Welcome!</Item>
          </Menu>
        ) : (
          <Menu mode="horizontal" style={{ float: 'right' }}>
            <Item onClick={clickedLogin}>Sign in</Item>
            <Item onClick={clickedSignup}>Sign up</Item>
          </Menu>
        ) }


    </Header>
  </Layout>
);

Navbar.propTypes = {
  clickedLogin: PropTypes.func,
  clickedSignup: PropTypes.func,
};

export default Navbar;
