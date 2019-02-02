import React,{Component} from 'react';

import {Link} from 'react-router-dom';
import logo from '../../../src/img/react-logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  //NavbarBrand,
  Nav,
  NavItem,
 // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>

        <Navbar  className="navbar navbar-expand-sm bg-secondary navbar-dark" light>
          <Link to=""><img src={logo} alt="Logo" width="50" /></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
              <Link to="/about">About</Link>
              </NavItem>
              <NavItem>
              <Link to="/contact">Contact</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                  <Link to="/about">About</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/contact">Contact</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
              <Link to="/contact">Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;