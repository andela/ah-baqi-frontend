import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout, Menu, Popconfirm, Icon, Input, Select,
} from 'antd';
import './navbar.scss';

const { Header } = Layout;
const { Item } = Menu;
const { Option } = Select;
let searchFilter = 'title';

const filterOptions = (
  <Select
    defaultValue="title"
    onChange={(value) => { searchFilter = value; }}
    className="search-select"
  >
    <Option value="title">title</Option>
    <Option value="tag">tag</Option>
    <Option value="author">author</Option>
  </Select>
);

const searchBar = (search, history) => (
  <Item className="modified-item">
    <Input.Search
      placeholder="Search"
      onSearch={value => value && search(searchFilter, value, history)}
      addonBefore={filterOptions}
      className="search-input"
    />
  </Item>
);

const Navbar = ({
  clickedLogin, clickedSignup, logOut, search, history,
}) => (
  <Layout className="nav">
    <Header className="nav">
      <a href="/" className="logo">
        <span className="app-name-logo"> Author&rsquo;s Haven </span>
      </a>
      {localStorage.username && localStorage.token && localStorage.isLoggedIn
        ? (
          <Menu mode="horizontal" data-test="authenticated-menu" className="nav-menu">
            {searchBar(search, history)}
            <Item>
              <Link to="/articles/new">
                <Icon type="plus-circle" className="icon-blue" />
                <span className="nav-text">New Article</span>
              </Link>
            </Item>
            <Item>
              <Link to="/profile">
                  Profile
              </Link>
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
          <Menu mode="horizontal" data-test="unauthenticated-menu" className="nav-menu">
            {searchBar(search, history)}
            <Item onClick={clickedLogin}>Sign in</Item>
            <Item onClick={clickedSignup}>Sign up</Item>
          </Menu>
        )}
    </Header>
  </Layout>
);

export default Navbar;
