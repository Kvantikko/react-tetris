import "./styles.css"

import Game from "./components/Game"

function App() {
  return (
    <div className="App">
      <Game rows={20} columns={10} />
      <h1> hello </h1>
    </div>
  );
}

export default App;
