import React from 'react';

import { HashRouter as Router, Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { Sidenav, Sidebar, Dropdown, Icon, Nav, DOMHelper } from 'rsuite';

const { getHeight } = DOMHelper;

const headerStyles = {
  padding: "20px 0 20px 0",
  margin: "0 20px 0 20px",
  fontSize: "20px",
  borderBottom: "1px solid #e5e5ea",
};

const NavItemLink = React.forwardRef((props, ref) => {
  const location = useLocation();
  return (
    <Nav.Item
      {...props}
      ref={ref}
      active={props.to === location.pathname}
      componentClass={NavLink}
    />
  );
});

const DropdownItemLink = React.forwardRef((props, ref) => {
  const location = useLocation();
  return (
    <Nav.Item
      {...props}
      ref={ref}
      active={props.to === location.pathname}
      componentClass={NavLink}
    />
  );
});

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: getHeight(window)
    };
  }
  render() {
    const { expand } = this.state;
    let bodyStyle = {
      height: this.state.windowHeight
    }
    return (
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        collapsible
      >
        <Sidenav
          appearance="subtle"
          style={ bodyStyle }
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <Icon icon="check" size="lg" style={{ verticalAlign: 0, color: "#16c60c" }} />
              <span style={{ marginLeft: 12 }}> EasyPCTO</span>
            </div>
          </Sidenav.Header>
          <Sidenav.Body>
            <Nav appearance="subtle" activeKey="1">
              <NavItemLink
                key="1"
                eventKey="1"
                icon={<Icon icon="dashboard" />}
                componentClass={NavLink}
                exact to="/"
                activeClassName="nav-item-active"
              >
                Home
              </NavItemLink>
              <NavItemLink
                key="2"
                eventKey="2"
                icon={<Icon icon="search" />}
                componentClass={NavLink}
                exact to="/business/search"
                activeClassName="nav-item-active"
              >
                Cerca azienda
              </NavItemLink>
              <NavItemLink
                key="3"
                eventKey="3"
                icon={<Icon icon="plus" />}
                componentClass={NavLink}
                exact to="/business/add"
                activeClassName="nav-item-active"
              >
                Inserisci azienda
              </NavItemLink>
              <NavItemLink
                key="4"
                eventKey="4"
                icon={<Icon icon="warning" />}
                componentClass={NavLink}
                exact to="/test"
                activeClassName="nav-item-active"
              >
                Test
              </NavItemLink>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
    );
  }
}
  
export default NavBar;