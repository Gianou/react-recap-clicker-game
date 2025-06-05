import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeScore, setTimeScore] = useState(null);
  const winNumber = 11;

  useEffect(() => {
    if (counter >= winNumber) {
      const endTime = Date.now();
      setTimeScore(endTime - startTime);
      setIsGameFinished(true);
    } else if (counter == 1) {
      setStartTime(Date.now());
    }
  }, [counter]);

  function resetGame() {
    setCounter(0);
    setIsGameFinished(false);
  }

  return (
    <>
      <h1>React Recap : Clicker Game</h1>
      {isGameFinished ? (
        <h2>You Won in {timeScore}ms</h2>
      ) : (
        <h2>Click {winNumber} times to win the game</h2>
      )}
      <h2>{counter}</h2>
      <button
        disabled={isGameFinished}
        onClick={() => setCounter((previousValue) => previousValue + 1)}
      >
        +
      </button>
      <br></br>
      <button onClick={resetGame}>Reset</button>
    </>
  );
}

export default App;
