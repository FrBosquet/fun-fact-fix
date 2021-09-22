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
      <img src="logo.png" />
      <h3>The best fun fact generator!</h3>
      <button onClick={generate}>G E N E R A T E N O W!</button>
      {funFact && <p>{funFact}</p>}
    </div>
  );
}
