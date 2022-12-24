import React, { useState } from 'react';
import { marked } from "marked";
import DOMPurify from 'dompurify';
import {ArrowsMaximize , ArrowsDiagonalMinimize2} from "tabler-icons-react";
import './App.css';

function App() {
  let markdown;
  const [mark , setMark] = useState('');

  function UpdateMarkdown(e){

    markdown = (marked(e.target.value));
    console.log(markdown);
    setMark( DOMPurify.sanitize(markdown) );
  }
  const [visible, setVisible] = useState(true);
  const [width , setWidth] = useState("45vw");
  let newWidth = (visible ? "90vw" : "45vw");

  function editorMaximizer(){
    // setWidth("90vh");
    setVisible(!visible);
    setWidth(newWidth);
  }

  return (
    <div className="App">
      <div className="editor-wrapper wrapper" style={{width : width}}>
        <div className="editor-toolbar toolbar">
          <span>Editor</span>
          <ArrowsMaximize onClick={editorMaximizer}/>
        </div>
        <textarea name="editor" id="editor" cols="30" rows="10" onChange={UpdateMarkdown}  ></textarea>
      </div>
      { visible && <div className="preview-wrapper wrapper" > 
        <div className="preview-toolbar toolbar">
          <span>Previewer</span>
          <ArrowsDiagonalMinimize2 />
        </div>
        <div id="preview" dangerouslySetInnerHTML={{__html:mark}}>
        </div>
      </div> }

    </div>
  );
}

export default App;
