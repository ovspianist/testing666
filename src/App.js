import logo from "./logo.svg";
import "./App.css";

function App() {
  const titleText = "";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the NodeSpell test app created by{" "}
          <code>create-react-app</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {titleText}
        </a>
      </header>
    </div>
  );
}

export default App;
