import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';
import Header from './component/headercomponent/header.js' ;
import Footer from './component/footer/footer.js';
import About from './component/Pages/about';
import Contact from './component/Pages/contact';

class App extends Component {
  render() {
    return (
      <Router>     
         <div className="App">
        <Header />
     
     <Route exact path ='/about' component={About} />
     <Route exact path ='/contact' component={Contact} />
{/* <About />
<Contact /> */}

        <Footer />
      </div>
      </Router>

    );
  }
}

export default App;
