import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import ListAdder from "./components/listAdder";

function App(props) {
  const [name, setName] = useState("Bob");

  function changeName(e) {
    if (name == "Brandon") {
      setName("Bob");
    } else {
      setName("Brandon");
    }
  }

  return (
    <>
      <div className="container container-xxl">
        <div class="row">
          <div className="col">
            <h1>Hello, {name}</h1>
          </div>
        </div>
        <div class="row">
          <div className="col">
            <button type="button" className="primary" onClick={changeName}>
              Click me!
            </button>
            <ListAdder />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
