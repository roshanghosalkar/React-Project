import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
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
    return (
      <div>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button>
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