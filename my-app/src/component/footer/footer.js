import React, { Component } from 'react';

import Nav from '../headercomponent/nav'; 

class Footer extends Component {
  render() {
    return (
      <footer>
           <h2>This is footer</h2>
           <Nav />
      </footer>
    );
  }
}

export default Footer;
