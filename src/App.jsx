import "./App.css";



function App(props) {
  
  return (
    <>
      <header>
        <h1>Hello, {props.subject}</h1>
        <button type="button">Click me!</button>

      </header>
    </>
  );
}

export default App;

