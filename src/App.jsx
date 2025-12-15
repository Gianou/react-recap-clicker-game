import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [gameDuration, setGameDuration] = useState(null);
  const clicksToWin = 11;

  useEffect(() => {
    if (counter >= clicksToWin) {
      setGameDuration(Date.now() - startTime);
    }
    if (counter == 1) {
      setStartTime(Date.now());
    }
  }, [counter]);

  let element;

  if (counter >= clicksToWin) {
    element = <p>You win in {gameDuration}ms</p>;
  } else {
    element = <p>The goal is to click {clicksToWin} times</p>;
  }

  return (
    <>
      <h2>Recap: Clicker Game</h2>
      {element}
      <button
        onClick={() => setCounter((previousValue) => previousValue + 1)}
        disabled={counter >= clicksToWin}
      >
        {counter}
      </button>
    </>
  );
}

export default App;
