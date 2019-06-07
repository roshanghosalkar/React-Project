import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';

import Header from './component/headercomponent/header.js' ;
import Footer from './component/footer/footer.js';
import About from './component/Pages/about';
import Contact from './component/Pages/contact';
import Homepage from './component/Pages/homepage';
// import CKEditor from 'ckeditor4-react';

 //import CKEditor from '@ckeditor/ckeditor5-react';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     editorState: EditorState.createEmpty(),
  //   };
  // }

  // onEditorStateChange: Function = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };
  
  render() {
   //  const { editorState } = this.state;
    return (
      <Router>     
         <div className="App">
        <Header />
     <Route exact path ='/' component={Homepage} />        
     <Route exact path ='/about' component={About} />
     <Route exact path ='/contact' component={Contact} />
     {/* <CKEditor
                    onInit={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
                    //config={ }
                /> */}
 {/* <Editor
        initialEditorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        toolbar={{
          options:['inline',  'list', 'colorPicker','fontSize','fontFamily'],
        }}
      />  */}
{/* <CKEditor
                    data="<p>Hello from CKEditor 4!</p>"
                /> */}


        <Footer />
      </div>
      </Router>

    );
  }
}
export default App;
