import './App.css';

function App() {
  return (
    <div className="App">
      <div className="editor-wrapper">
        <div className="editor-toolbar">
          <p>Editor</p>
          
        </div>
        <div id="editor"></div>
      </div>
      <div className="preview-wrapper">
        <div className="preview-toolbar">
          <p>Previewer</p>
        </div>
        <div id="preview"></div>
      </div>

    </div>
  );
}

export default App;
