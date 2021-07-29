import React from 'react';
import {Button} from "./Components/Button";
import {MainComponent} from "./Patterns/Behavioral/Observer/MainComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello world!
      </header>
      <Button id={1} />
      <Button id={2} />
      <hr />
      <MainComponent />
    </div>
  );
}

export default App;
