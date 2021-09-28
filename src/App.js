import { useState } from "react";
import { funFactGenerator } from "./funfact-generator";
import "./styles.css";

export default function App() {
  const [funFact, setFunFact] = useState(null);

  const generate = () => {
    setFunFact(funFactGenerator());
  };

  return (
    <div
      className="Ap
    p"
    >
      <img src="logo.png" />
      <h3>The best fun fact generator in the world!</h3>
      <button onClick={generate}>G E N E R A T E N O W!</button>
      {funFact && <p className="fun-fact">{funFact}</p>}
      <p className="version">version 1.0.1</p>
    </div>
  );
}
