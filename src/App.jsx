import "./App.css";
import { useState } from 'react';




function App(props) {
  const [name, setName] = useState("Bob");

  function changeName(e) {
    if (name == "Brandon") {
      setName("Bob")
    }
    else {
      setName("Brandon")

    }
  }


  return (
    <>
      <header>
        <h1>Hello, {name}</h1>
        <button type="button" className="primary" onClick={changeName}>
          Click me!

        </button>

      </header>
    </>
  );
}

export default App;

