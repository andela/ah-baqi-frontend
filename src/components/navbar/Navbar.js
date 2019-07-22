import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout, Menu, Popconfirm, Icon,
} from 'antd';
import './navbar.scss';

const { Header } = Layout;
const { Item } = Menu;

const Navbar = ({ clickedLogin, clickedSignup, logOut }) => (
  <Layout className="nav">
    <Header className="nav">
      <Link to="/" className="logo">
        <span className="app-name-logo"> Author&rsquo;s Haven </span>
      </Link>
      {localStorage.username && localStorage.token && localStorage.isLoggedIn
        ? (
          <Menu mode="horizontal" style={{ float: 'right' }} data-test="authenticated-menu">
            <Item>
              <Link to="/articles/new">
                <Icon type="plus-circle" className="icon-blue" />
                <span className="nav-text">New Article</span>
              </Link>
            </Item>
            <Item>
              <div className="navbar-profile-pic">
                <Link to="/profile">
                  Profile
                </Link>
              </div>
            </Item>
            <Item>
              <Popconfirm
                title="Are you sure?"
                onConfirm={logOut}
                placement="bottom"
                okText="Yes"
                cancelText="No"
              >
                Log out
              </Popconfirm>
            </Item>
          </Menu>
        ) : (
          <Menu mode="horizontal" style={{ float: 'right' }} data-test="unauthenticated-menu">
            <Item onClick={clickedLogin}>Sign in</Item>
            <Item onClick={clickedSignup}>Sign up</Item>
          </Menu>
        )}
    </Header>
  </Layout>
);

export default Navbar;
