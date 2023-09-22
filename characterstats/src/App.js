import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ abilityScore, setAbilityScore] = useState(27);

  const [strScore, setStrScore] = useState(8);
  const [dexScore, setDexScore] = useState(8);
  const [conScore, setConScore] = useState(8);
  const [intScore, setIntScore] = useState(8);
  const [wisScore, setWisScore] = useState(8);
  const [chaScore, setChaScore] = useState(8);
  const [cusScore, setCusScore] = useState(8);

 

  return (
    <div >
      <div>
        <h1>Choose your Race</h1>
      </div>

    <div>
      <h2>Choose your Stats</h2>

      <p>You start out with 27 ability points to spend. Your base stats start at 8 and can increase or decrease from there. The table below lets you know how many points you spend per increment or decrement. Currently it is set to RAW rules where you can't get above a 15 unless it is through racial traits.</p>
      <h1>{abilityScore}</h1>
    </div>
    <hr></hr>
    <div>
      <button onClick={() => setAbilityScore((prevStrScore) => prevStrScore - 1)}>+</button>
      <button onClick={() => setAbilityScore((prevStrScore) => prevStrScore + 1)}>-</button>
      <h4>Strength {strScore}</h4>
    </div>
    <hr></hr>
    <div>
      <button onClick={() => setAbilityScore((prevDexScore) => prevDexScore - 1)}>+</button>
      <button onClick={() => setAbilityScore((prevDexScore) => prevDexScore + 1)}>-</button>
      <h4>Dexterity {dexScore}</h4>
    </div>
    <hr></hr>
    <div>
      <button onClick={() => setAbilityScore((prevConScore) => prevConScore - 1)}>+</button>
      <button onClick={() => setAbilityScore((prevConScore) => prevConScore + 1)}>-</button>
      <h4>Constitution {conScore}</h4>
    </div>
    <hr></hr>
    <div>
      <button onClick={() => setAbilityScore((prevIntScore) => prevIntScore - 1)}>+</button>
      <button onClick={() => setAbilityScore((prevIntScore) => prevIntScore + 1)}>-</button>
      <h4>Intelligence {intScore}</h4>
    </div>
    <hr></hr>
    <div>
      <button onClick={() => setAbilityScore((prevWisScore) => prevWisScore - 1)}>+</button>
      <button onClick={() => setAbilityScore((prevWisScore) => prevWisScore + 1)}>-</button>
      <h4>Wisdom {wisScore}</h4>
    </div>
    <hr></hr>
    <div>
      <button onClick={() => setAbilityScore((prevChaScore) => prevChaScore - 1)}>+</button>
      <button onClick={() => setAbilityScore((prevChaScore) => prevChaScore + 1)}>-</button>
      <h4>Charisma {chaScore}</h4>
    </div>
    <hr></hr>
    <div>
    <button onClick={() => setAbilityScore((prevCusScore) => prevCusScore - 1)}>+</button>
      <button onClick={() => setAbilityScore((prevCusScore) => prevCusScore + 1)}>-</button>
      <h4>Custom {cusScore}</h4>
    </div>

    </div>
  );
}

export default App;
