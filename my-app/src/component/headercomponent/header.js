import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../src/img/react-logo.png';









import Navigation from './nav';


class Header extends Component {
  render() {
    return (
      <div>
        <header>
        
            <div className="top-nav">
              <div className="top-link container">
                 <div className="link"><i class="fas fa-sign-in-alt"></i> Login</div>
              </div>
            </div>
          
        <div className="container">
          <div className="row">
             <div className="col-md-3"><Link to=""><img src={logo} alt="Logo" width="100" /></Link></div>
             <div className="col-md-6">
              <div class="input-group mb-4 mt-4">
               <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                  </div>
              </div>
             </div>
             <div className="col-md-3">scsdcsd</div>
          </div>
        </div>
            


        




            
            <Navigation />
      </header>          
     
      </div>
      
    );
  }
}

export default Header;
