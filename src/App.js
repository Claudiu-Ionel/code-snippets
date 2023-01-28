import { useState } from "react"
import './App.css';
import Ide from "./components/Ide.jsx"
import state from "./state/state";
import Navbar from "./components/Navbar.jsx"
function App() {
  const [editorState, setEditorState] = useState(state[0].editorCode)

  return (
    <div className="App">
      <div className="left">
        <Navbar data={state} setState={setEditorState} />
      </div>
      <div className="right">
        <Ide content={editorState}></Ide>
      </div>
    </div >
  );
}

export default App;
