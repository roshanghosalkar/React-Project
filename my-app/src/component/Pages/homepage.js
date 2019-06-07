import React, { Component } from 'react';
import ReactDOM from "react-dom";
//import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import img1 from '../../../src/img/img1.jpg';
//import img2 from '../../../src/img/img2.jpg';
//import img3 from '../../../src/img/img3.jpg';
// import Draggable from 'react-draggable';
//import { render } from "react-dom";
 import { EditorState } from 'draft-js';
 import { Editor } from 'react-draft-wysiwyg';
 import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Rnd } from "react-rnd";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };
  


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: ""
  //   };
  // }
  changeText(event) {
    this.setState({
      name: event.target.value
    });
  }
    reset=()=>{
      this.refs.someName.value = '';
      

      
    }


  showAlert() {
    alert("Im an alert");
  }
  

  render() {
    const { editorState } = this.state;
    return (
      <div>
  {/* <OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    nav
    items={1}
    dots={false}
    autoplay={true}
    >
    <div class="item"><img src={img1} alt="img1" /></div>
    <div class="item"><img src={img2} alt="img1" /></div>
    <div class="item"><img src={img3} alt="img1" /></div>
   
</OwlCarousel> */}


<br></br><br></br>

<br></br>
<br></br>
<div className="Roshan">
{/* <Draggable>
  <div>I can now be moved around!</div>
</Draggable> */}


<Rnd
  default={{
    x: 0,
    y: 0,
    width: 300,
    height: 200
  }}
  className={'abc'}
  bounds={'.Roshan'}
  lockAspectRatio={'3/4'}
  dragHandleClassName={'rdw-editor-toolbar'}
>
<Editor
        initialEditorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        toolbar={{
          options:['inline',  'list', 'colorPicker','fontSize','fontFamily'],
        }}
      /> 
</Rnd>

</div>
 <br></br>
<br></br>
<button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal"></button>
  <br></br>
  <button onClick={this.showAlert}>show alert</button>
<br></br><br></br>
<label htmlFor="name">Enter Text For Modal </label>
        <textarea type="text" id="name" col="5" row="20" ref="someName" onChange={this.changeText.bind(this)} />
       
<br></br>
<br></br>
<button onClick={this.reset}>Reset</button>
<br></br>
<br></br>
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
       
        <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div className="modal-body">
        <h3 ref="someName1">{this.state.name}</h3> 
        <button onClick={this.reset.bind(this)}>Reset</button>
               </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div> 


       </div>         
    );
  }
}

export default Homepage;
const rootElement = document.getElementById("root");
ReactDOM.render(<Homepage />, rootElement);
