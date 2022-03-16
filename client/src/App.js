import React, { useState, useContext } from "react";
import "./App.css";
import { TransactionContext } from "./context/TransactionContext";
import { Loading } from "./components/Loader";

function App() {
  const { greeting, getGreeting, setGreeting, loading } =
    useContext(TransactionContext);
  const [newGreeting, setNewGreeting] = useState("");

  const updateGreeting = () => {
    setGreeting(newGreeting);
    setNewGreeting("");
  };


  return (
    <div className="App">
      <header className="App-header">
        {loading && <Loading />}
        {!loading && (
          <>
            <button onClick={getGreeting}>Greet</button>
            <h3>{greeting}</h3>
            <input
              type="text"
              value={newGreeting}
              name="newGreeting"
              onChange={(e) => setNewGreeting(e.target.value)}
            />
            <button onClick={updateGreeting}>Set Greet</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
