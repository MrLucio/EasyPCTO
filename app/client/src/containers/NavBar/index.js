import React from 'react';

import { Link } from 'react-router-dom';
import { Sidenav, Sidebar, Icon, Nav, Navbar, DOMHelper } from 'rsuite';

const { getHeight } = DOMHelper;

const headerStyles = {
  padding: "20px 0 20px 0",
  margin: "0 20px 0 20px",
  fontSize: "20px",
  borderBottom: "1px solid #e5e5ea",
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center'
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      windowHeight: getHeight(window)
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      //expand: !this.state.expand
    });
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
          activeKey="1"
          appearance="default"
          style={ bodyStyle }
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <Icon icon="check" size="lg" style={{ verticalAlign: 0, color: "#16c60c" }} />
              <span style={{ marginLeft: 12 }}> EasyPCTO</span>
            </div>
          </Sidenav.Header>
          <Sidenav.Body >
            <Nav appearance="subtle">
              <Nav.Item
                eventKey="1"
                active
                icon={<Icon icon="dashboard" />}
                componentClass={Link}
                to="/"
              >
                Home
              </Nav.Item>
              <Nav.Item
                eventKey="2"
                icon={<Icon icon="search" />}
                componentClass={Link}
                to="/business"
              >
                Trova azienda
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
    );
  }
}
  
export default NavBar;