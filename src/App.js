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

  const [visibleEdit, setvisibleEdit] = useState(true);
  const [widthEdit , setWidthEdit] = useState("45vw");
  let newWidthEdit = (visibleEdit ? "90vw" : "45vw");
  function editorMaximizer(){
    setvisibleEdit(!visibleEdit);
    setWidthEdit(newWidthEdit);
  }

  const [visibleView, setvisibleView] = useState(true);
  const [widthView , setWidthView] = useState("45vw");
  let newWidthView = (visibleView ? "90vw" : "45vw");
  function previewMaximizer(){
    setvisibleView(!visibleView);
    setWidthView(newWidthView);
  }
  return (
    <div className="App">
      {visibleView && <div className="editor-wrapper wrapper" style={{width : widthEdit}}>
        <div className="editor-toolbar toolbar">
          <span>Editor</span>
          <button onClick={editorMaximizer}> {visibleEdit ? <ArrowsMaximize/> : <ArrowsDiagonalMinimize2/> } </button>
        </div>
        <textarea name="editor" id="editor" cols="30" rows="10" onChange={UpdateMarkdown}  ></textarea>
      </div>}
      { visibleEdit && <div className="preview-wrapper wrapper" style={{width : widthView}} > 
        <div className="preview-toolbar toolbar">
          <span>Previewer</span>
          <button onClick={previewMaximizer} > {visibleView ? <ArrowsMaximize/> : <ArrowsDiagonalMinimize2/> }</button>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{__html:mark}}>
        </div>
      </div> }

    </div>
  );
}

export default App;
