import React, { Component } from 'react';


import Nav from './nav';


class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <div class="logo">LOGO</div>
            <Nav />
      </header>          
     
      </div>
      
    );
  }
}

export default Header;
