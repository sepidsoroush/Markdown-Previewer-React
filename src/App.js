import './App.css';
import { marked } from "marked";
import Badge from "react-bootstrap/Badge";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ArrowsMaximize , ArrowsDiagonalMinimize2} from "tabler-icons-react";

function App() {

  return (
    <div className="App">
      <div className="editor-wrapper wrapper">
        <div className="editor-toolbar toolbar">
          <span>Editor</span>
          <ArrowsMaximize />
        </div>
        <textarea name="editor" id="editor" cols="30" rows="10"></textarea>
        
      </div>
      <div className="preview-wrapper wrapper">
        <div className="preview-toolbar toolbar">
          <span>Previewer</span>
          <ArrowsDiagonalMinimize2 />
        </div>
        <div id="preview"></div>
      </div>

    </div>
  );
}

export default App;
