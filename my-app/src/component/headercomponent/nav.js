import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../src/img/react-logo.png';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to=""><img src={logo} alt="Logo" width="50" /></Link>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
          
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            <li className="dropdown">
              <Link to="#"  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></Link>
              <ul className="dropdown-menu">
                <li><Link to="#">Action</Link></li>
                <li><Link to="#">Another action</Link></li>
                <li><Link to="#">Something else here</Link></li>
                <li role="separator" className="divider"></li>
                <li className="dropdown-header">Nav header</li>
                <li><Link to="#">Separated link</Link></li>
                <li><Link to="#">One more separated link</Link></li>
              </ul>
            </li>
          </ul>
        </div>













           
            </div>
       </nav>         
    );
  }
}

export default Nav;
