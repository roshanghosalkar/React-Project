import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Homepage extends Component {
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
  <button onClick={this.showAlert}>show alert</button>;


  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
       
        <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div className="modal-body">
          Modal body..
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