import React from 'react';

import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;

class NavBar extends React.Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu defaultSelectedKeys={['3']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Prova</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Prova 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="business">
                <Icon type="file" />
                File
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.chilren}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default NavBar;