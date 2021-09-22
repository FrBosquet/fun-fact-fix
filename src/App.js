import { useState } from "react";
import { funFactGenerator } from "./funfact-generator";
import "./styles.css";

export default function App() {
  const [funFact, setFunFact] = useState(null);

  const generate = () => {
    setFunFact(funFactGenerator());
  };

  return (
    <div className="App">
      <h1>fun-fact-fix</h1>
      <h2>fun fact generator!</h2>
      <button onClick={generate}>G E N E R A T E N O W!</button>
      {funFact && <p>{funFact}</p>}
    </div>
  );
}
