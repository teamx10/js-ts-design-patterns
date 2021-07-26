import React from 'react';
import {DbServiceObject} from "./db.service.object";

function App() {
  const load1 = () => DbServiceObject.load('load 1');
  const load2 = () => DbServiceObject.load('load 2');
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
