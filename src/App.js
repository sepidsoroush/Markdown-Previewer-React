import React, { useState } from 'react';
import { marked } from "marked";
import {ArrowsMaximize , ArrowsDiagonalMinimize2} from "tabler-icons-react";
import './App.css';

function App() {
  let markdown;
  const [mark , setMark] = useState('');

  function UpdateMarkdown(e){

    markdown = marked(e.target.value , { sanitize: true });
    console.log(markdown);
    setMark( markdown );
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
        <div id="preview">
          {mark}
          {markdown}
        </div>
      </div>

    </div>
  );
}

export default App;
