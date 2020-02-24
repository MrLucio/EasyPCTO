import React from 'react';

import { Link } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;

const links = {
  '/': 0,
  '/business': 1,
  '/settings': 2
}

class NavBar extends React.Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider theme="light" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu defaultSelectedKeys={['0']} mode="inline">
          <Menu.Item key="0">
            <Icon type="pie-chart" />
            <span>Homepage</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="desktop" />
            <span>Aziende</span>
            <Link to="/business" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="setting" theme="filled" />
            <span>Impostazioni</span>
            <Link to="/settings" />
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="lock" theme="filled"/>
            <span>Login</span>
            <Link to="/login" />
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default NavBar;