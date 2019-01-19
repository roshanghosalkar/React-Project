import React, { Component } from 'react';

//import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';


import Nav from './nav';


class Header extends Component {
  render() {
    return (
      <div>
        <header>
            
            <Button bsStyle="info">click me </Button>
            <Nav />
      </header>          
     
      </div>
      
    );
  }
}

export default Header;
