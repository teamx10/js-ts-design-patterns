import React from 'react';
import {dbServiceClass} from "./db.service.class";

function App() {
  const load1 = () => dbServiceClass.load('load 1');
  const load2 = () => dbServiceClass.load('load 2');
  return (
    <div className="App">
      <header className="App-header">
        Hello world!
      </header>
      <button onClick={load1}>Load from server 1</button>
      <button onClick={load2}>Load from server 2</button>
    </div>
  );
}

export default App;
