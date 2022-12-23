import './App.css';
import Markdown from "marked-react";
import {ArrowsMaximize , ArrowsDiagonalMinimize2} from "tabler-icons-react";

function App() {

  return (
    <div className="App">
      <div className="editor-wrapper">
        <div className="editor-toolbar">
          <p>Editor</p>
          <ArrowsMaximize />
        </div>
        <textarea name="editor" id="editor" cols="30" rows="10"></textarea>
      </div>
      <div className="preview-wrapper">
        <div className="preview-toolbar">
          <p>Previewer</p>
          <ArrowsDiagonalMinimize2 />
        </div>
        <div id="preview"></div>
      </div>

    </div>
  );
}

export default App;
