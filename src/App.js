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
  return (
    <div className="App">
      <div className="editor-wrapper wrapper">
        <div className="editor-toolbar toolbar">
          <span>Editor</span>
          <ArrowsMaximize />
        </div>
        <textarea name="editor" id="editor" cols="30" rows="10" onChange={UpdateMarkdown}></textarea>
      </div>
      <div className="preview-wrapper wrapper">
        <div className="preview-toolbar toolbar">
          <span>Previewer</span>
          <ArrowsDiagonalMinimize2 />
        </div>
        <div id="preview" dangerouslySetInnerHTML={{__html:mark}}>
        </div>
      </div>

    </div>
  );
}

export default App;
