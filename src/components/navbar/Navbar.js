import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Popconfirm } from 'antd';
import './navbar.scss';

const { Header } = Layout;
const { Item } = Menu;

const Navbar = ({ clickedLogin = null, clickedSignup = null, logOut = null }) => (
  <Layout className="nav">
    <Header className="nav">
      <Link to="/" className="logo">
        Author&rsquo;s Haven
      </Link>
      {localStorage.username && localStorage.token && localStorage.isLoggedIn
        ? (
          <Menu mode="horizontal" style={{ float: 'right' }} data-test="authenticated-menu">
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
