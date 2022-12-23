import './App.css';
import { marked } from "marked";
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
        <div id="preview">
          <p>Welcome to my React Markdown Previewer!
            This is a sub-heading...
            And here's some other cool stuff:
            Heres some code, <div></div>, between 2 backticks.

            // this is multi-line code:

            
            You can also make text bold... whoa!
            Or italic.
            Or... wait for it... both!
            And feel free to go crazy crossing stuff out.

            There's also links, and

            Block Quotes!

            And if you want to get really crazy, even tables:

            Wild Header	Crazy Header	Another Header?
            Your content can	be here, and it	can be here....
            And here.	Okay.	I think we get it.
            And of course there are lists.
            Some are bulleted.
            With different indentation levels.
            That look like this.
            And there are numbered lists too.
            Use just 1s if you want!And last but not least, let's not forget embedded images:</p>
        </div>
      </div>

    </div>
  );
}

export default App;
