import React, { useState } from 'react';
import './App.css';
import EditorComponent from './components/EditorComp';
import EntityComponent from './components/EntityComp';

function App() {
  const [matchesList, setMatchesList] = useState([]); // State to hold matched patterns

  return (
    <div className="App">
      <header className="App-header">
        <h1>TinyMCE</h1>
      </header>
      <main className="flex-container">
        <div className="left-component">
         
          <EditorComponent setMatchesList={setMatchesList} />
        </div>
        <div className="right-component">
          
          <EntityComponent matchesList={matchesList} />
        </div>
      </main>
    </div>
  );
}

export default App;