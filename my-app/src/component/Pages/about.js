import React, { Component } from 'react';
import {Animated} from "react-animated-css";


class About extends Component {
  render() {
    return (
      <div>


            <h1>This is my About Page</h1>
            
<Animated animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible={false}>
    <div>
        hello world ;)
    </div>
</Animated>

       </div>         
    );
  }
}

export default About;
