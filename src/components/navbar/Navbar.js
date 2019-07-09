import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const { Item } = Menu;

const Navbar = (props) => {
  const { clickedLogin, clickedSignup } = props;
  return (
    <Layout className="nav">
      <Header className="nav">
        <Link to="/" className="logo">
            Author&rsquo;s Haven
        </Link>
        <Menu mode="horizontal" style={{ float: 'right' }}>
          <Item onClick={clickedLogin}>Sign in</Item>
          <Item onClick={clickedSignup}>Sign up</Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
