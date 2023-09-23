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

  const [racialStr, setRacialStr] = useState(0);


  const [totalStr, setTotalStr] = useState(8);
  const [totalDex, setTotalDex] = useState(8);
  const [totalCon, setTotalCon] = useState(8);
  const [totalInt, setTotalInt] = useState(8);
  const [totalWis, setTotalWis] = useState(8);
  const [totalCha, setTotalCha] = useState(8);
  const [totalCus, setTotalCus] = useState(8);
  
function updateScores(plusOrMinus, attributeType) {
  if (plusOrMinus === 'plus') {
    setAbilityScore(abilityScore - 1);
  } else {
    setAbilityScore(abilityScore + 1);
  }

  switch(attributeType) {
    case 'strength':
      if (plusOrMinus === 'plus') {
        setStrScore(strScore + 1);
        setTotalStr(totalStr + 1)
      } else {
        setStrScore(strScore - 1);
        setTotalStr(totalStr - 1)
      }
      break;

    case 'dexterity':
      if(plusOrMinus === 'plus') {
        setDexScore(dexScore + 1);
        setTotalDex(totalDex + 1)
      } else {
        setDexScore(dexScore - 1);
        setTotalDex(totalDex - 1)
      }
      break;
      default:
        return;
  }
}


  return (
    <div >
      <div>
        <label>
          <h1>Choose your Race</h1>
          <select>
            <option>Select</option>
            <option onSelect={elfRacial}>Elf</option>
            <option onSelect={() => humanRacial((racialStr) => racialStr + 1)}>Human</option>
            <option onSelect={halfOrcRacial}>Half-Orc</option>
            <option onSelect={halfElfRacial}>Half-Elf</option>
            <option onSelect={gnomeRacial}>Gnome</option>
            <option onSelect={tieflingRacial}>Tiefling</option>
            <option onSelect={dwarfRacial}>Dwarf</option>
            <option onSelect={halflingRacial}>Halfing</option>
            <option onSelect={dragonbornRacial}>Dragonborn</option>
          </select>
        </label>
      </div>

    <div>
      <h2>Choose your Stats</h2>

      <p>You start out with 27 ability points to spend. Your base stats start at 8 and can increase or decrease from there. The table below lets you know how many points you spend per increment or decrement. Currently it is set to RAW rules where you can't get above a 15 unless it is through racial traits.</p>
      <h1>{abilityScore}</h1>
    </div>
    <hr></hr>
    <div>
      <button onClick={() => updateScores('plus', 'strength')}>+</button>
      <button onClick={() => updateScores('minus', 'strength')}>-</button>
      <h4>Strength {strScore} + {racialStr} = {totalStr}</h4>
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

function elfRacial(){};

function humanRacial(){};

function dragonbornRacial(){};

function halfElfRacial(){};

function halflingRacial(){};

function halfOrcRacial(){};

function dwarfRacial(){};

function tieflingRacial(){};

function gnomeRacial(){};

export default App;
