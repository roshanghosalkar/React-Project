import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../src/img/img1.jpg';
import img2 from '../../../src/img/img2.jpg';
import img3 from '../../../src/img/img3.jpg';


class About extends Component {
  render() {
    return (
      <div>


            <h1>This is my About Page</h1>
            <OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    nav
    items={1}

>
    <div class="item"><img src={img1} alt="img1" /></div>
    <div class="item"><img src={img2} alt="img1" /></div>
    <div class="item"><img src={img3} alt="img1" /></div>
   
</OwlCarousel>
       </div>         
    );
  }
}

export default About;
