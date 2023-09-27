import { useEffect, useState } from 'react';
import './App.css'; 
import pointbuy from './picture/pointbuy.png';

function App() {
  const [ abilityScore, setAbilityScore] = useState(27);
  const [raceSelected, setRaceSelected] = useState('');

  const [strScore, setStrScore] = useState(8);
  const [dexScore, setDexScore] = useState(8);
  const [conScore, setConScore] = useState(8);
  const [intScore, setIntScore] = useState(8);
  const [wisScore, setWisScore] = useState(8);
  const [chaScore, setChaScore] = useState(8);
  const [cusScore, setCusScore] = useState(8);

  const [racialStr, setRacialStr] = useState(0);
  const [racialDex, setRacialDex] = useState(0);
  const [racialCon, setRacialCon] = useState(0);
  const [racialInt, setRacialInt] = useState(0);
  const [racialWis, setRacialWis] = useState(0);
  const [racialCha, setRacialCha] = useState(0);
  const [racialCus, setRacialCus] = useState(0);


  const [totalStr, setTotalStr] = useState(8);
  const [totalDex, setTotalDex] = useState(8);
  const [totalCon, setTotalCon] = useState(8);
  const [totalInt, setTotalInt] = useState(8);
  const [totalWis, setTotalWis] = useState(8);
  const [totalCha, setTotalCha] = useState(8);
  const [totalCus, setTotalCus] = useState(8);


//this function is used for the math to update the scores of each ability  
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
        setTotalStr(totalStr + racialStr + 1)
      } else {
        setStrScore(strScore - 1);
        setTotalStr(totalStr - 1)
      }
      break;

    case 'dexterity':
      if(plusOrMinus === 'plus') {
        setDexScore(dexScore + 1);
        setTotalDex(totalDex + racialDex + 1)
      } else {
        setDexScore(dexScore - 1);
        setTotalDex(totalDex - 1)
      }
      break;

      case 'constitution':
        if(plusOrMinus === 'plus') {
          setConScore(conScore + 1);
          setTotalCon(totalCon + racialCon + 1)
        } else {
          setConScore(conScore - 1);
          setTotalCon(totalCon - 1)
        }
        break;

        case 'intelligence':
          if(plusOrMinus === 'plus') {
            setIntScore(intScore + 1);
            setTotalInt(totalInt + racialInt + 1)
          } else {
            setIntScore(intScore - 1);
            setTotalInt(totalInt - 1)
          }
          break;

          case 'wisdom':
            if(plusOrMinus === 'plus') {
              setWisScore(wisScore + 1);
              setTotalWis(totalWis + racialWis + 1)
            } else {
              setWisScore(wisScore - 1);
              setTotalWis(totalWis - 1)
            }
            break;

            case 'charisma':
              if(plusOrMinus === 'plus') {
                setChaScore(chaScore + 1);
                setTotalCha(totalCha + racialCha + 1)
              } else {
                setChaScore(chaScore - 1);
                setTotalCha(totalCha - 1)
              }
              break;

              case 'custom':
                if(plusOrMinus === 'plus') {
                  setCusScore(cusScore + 1);
                  setTotalCus(totalCus + racialCus + 1)
                } else {
                  setCusScore(cusScore - 1);
                  setTotalCus(totalCus - 1)
                }
                break;
      default:
        return;
  }
}

  useEffect(() => {
    if (raceSelected === 'Human') {
      setRacialStr(1);
      setTotalStr(racialStr + strScore);

      setRacialDex(1);
      setTotalDex(racialDex + dexScore);

      setRacialCon(1);
      setTotalCon(racialCon + conScore);

      setRacialInt(1);
      setTotalInt(racialInt + intScore);

      setRacialWis(1);
      setTotalWis(racialWis + wisScore);

      setRacialCha(1);
      setTotalDex(racialCha + chaScore);

      setRacialCus(1);
      setTotalCus(racialCus + cusScore);
    } else if (raceSelected === 'Elf') {
      setRacialStr(0);
      setTotalStr(racialStr + strScore);

      setRacialDex(2);
      setTotalDex(racialDex + dexScore);

      setRacialCon(0);
      setTotalCon(racialCon + conScore);

      setRacialInt(0);
      setTotalInt(racialInt + intScore);

      setRacialWis(0);
      setTotalWis(racialWis + wisScore);

      setRacialCha(0);
      setTotalDex(racialCha + chaScore);

      setRacialCus(0);
      setTotalCus(racialCus + cusScore);
    } else if (raceSelected === 'Dwarf') {
      setRacialStr(0);
      setTotalStr(racialStr + strScore);

      setRacialDex(0);
      setTotalDex(racialDex + dexScore);

      setRacialCon(2);
      setTotalCon(racialCon + conScore);

      setRacialInt(0);
      setTotalInt(racialInt + intScore);

      setRacialWis(0);
      setTotalWis(racialWis + wisScore);

      setRacialCha(0);
      setTotalDex(racialCha + chaScore);

      setRacialCus(0);
      setTotalCus(racialCus + cusScore);
    } else if (raceSelected === 'Dragonborn') {
      setRacialStr(2);
      setTotalStr(racialStr + strScore);

      setRacialDex(0);
      setTotalDex(racialDex + dexScore);

      setRacialCon(0);
      setTotalCon(racialCon + conScore);

      setRacialInt(0);
      setTotalInt(racialInt + intScore);

      setRacialWis(0);
      setTotalWis(racialWis + wisScore);

      setRacialCha(1);
      setTotalDex(racialCha + chaScore);

      setRacialCus(0);
      setTotalCus(racialCus + cusScore);
    } else if (raceSelected === 'Gnome') {
      setRacialStr(0);
      setTotalStr(racialStr + strScore);

      setRacialDex(0);
      setTotalDex(racialDex + dexScore);

      setRacialCon(0);
      setTotalCon(racialCon + conScore);

      setRacialInt(2);
      setTotalInt(racialInt + intScore);

      setRacialWis(0);
      setTotalWis(racialWis + wisScore);

      setRacialCha(0);
      setTotalDex(racialCha + chaScore);

      setRacialCus(0);
      setTotalCus(racialCus + cusScore);
    } else if (raceSelected === 'Half-Elf') {
      setRacialStr(0);
      setTotalStr(racialStr + strScore);

      setRacialDex(1);
      setTotalDex(racialDex + dexScore);

      setRacialCon(0);
      setTotalCon(racialCon + conScore);

      setRacialInt(1);
      setTotalInt(racialInt + intScore);

      setRacialWis(0);
      setTotalWis(racialWis + wisScore);

      setRacialCha(2);
      setTotalDex(racialCha + chaScore);

      setRacialCus(0);
      setTotalCus(racialCus + cusScore);
    } else if (raceSelected === 'Halfling') {
      setRacialStr(0);
      setTotalStr(racialStr + strScore);

      setRacialDex(2);
      setTotalDex(racialDex + dexScore);

      setRacialCon(0);
      setTotalCon(racialCon + conScore);

      setRacialInt(0);
      setTotalInt(racialInt + intScore);

      setRacialWis(0);
      setTotalWis(racialWis + wisScore);

      setRacialCha(0);
      setTotalDex(racialCha + chaScore);

      setRacialCus(0);
      setTotalCus(racialCus + cusScore);
    } else if (raceSelected === 'Half-Orc') {
      setRacialStr(2);
      setTotalStr(racialStr + strScore);

      setRacialDex(0);
      setTotalDex(racialDex + dexScore);

      setRacialCon(1);
      setTotalCon(racialCon + conScore);

      setRacialInt(0);
      setTotalInt(racialInt + intScore);

      setRacialWis(0);
      setTotalWis(racialWis + wisScore);

      setRacialCha(0);
      setTotalDex(racialCha + chaScore);

      setRacialCus(0);
      setTotalCus(racialCus + cusScore);
    } else if (raceSelected === 'Tiefling') {
      setRacialStr(0);
      setTotalStr(racialStr + strScore);

      setRacialDex(0);
      setTotalDex(racialDex + dexScore);

      setRacialCon(0);
      setTotalCon(racialCon + conScore);

      setRacialInt(1);
      setTotalInt(racialInt + intScore);

      setRacialWis(0);
      setTotalWis(racialWis + wisScore);

      setRacialCha(2);
      setTotalDex(racialCha + chaScore);

      setRacialCus(0);
      setTotalCus(racialCus + cusScore);
    };
  }, [raceSelected])



//Formula to get the ability modifier for each stat

function strMod() {
  let modifier = Math.floor((totalStr - 10) / 2)
  if (modifier > 0) {
    return <span>+ {modifier}</span>
  } else {
    return <span> {modifier}</span>
  }
}

function dexMod() {
  let modifier = Math.floor((totalDex - 10) / 2)
  if (modifier > 0) {
    return <span>+ {modifier}</span>
  } else {
    return <span> {modifier}</span>
  }
}

function conMod() {
  let modifier = Math.floor((totalCon - 10) / 2)
  if (modifier > 0) {
    return <span>+ {modifier}</span>
  } else {
    return <span> {modifier}</span>
  }
}

function intMod() {
  let modifier = Math.floor((totalInt - 10) / 2)
  if (modifier > 0) {
    return <span>+ {modifier}</span>
  } else {
    return <span> {modifier}</span>
  }
}

function wisMod() {
  let modifier = Math.floor((totalWis - 10) / 2)
  if (modifier > 0) {
    return <span>+ {modifier}</span>
  } else {
    return <span> {modifier}</span>
  }
}

function chaMod() {
  let modifier = Math.floor((totalCha - 10) / 2)
  if (modifier > 0) {
    return <span>+ {modifier}</span>
  } else {
    return <span> {modifier}</span>
  }
}

function cusMod() {
  let modifier = Math.floor((totalCus - 10) / 2)
  if (modifier > 0) {
    return <span>+ {modifier}</span>
  } else {
    return <span> {modifier}</span>
  }
}

  return (
    <div >
      <div>
        <label>
          <h1>Choose your Race</h1>
          <select 
            value={raceSelected}
            onChange={e => setRaceSelected(e.target.value)}
          >
            <option>Select</option>
            <option value="Elf">Elf</option>
            <option value="Human">Human</option>
            <option value="Gnome">Gnome</option>
            <option value="Half-Elf">Half-Elf</option>
            <option value="Half-Orc">Half-Orc</option>
            <option value="Tiefling">Tiefling</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Halfling">Halfling</option>
          </select>
        </label>
      </div>

    <div>
      <h2>Choose your Stats</h2>

      <p>You start out with 27 ability points to spend. Your base stats start at 8 and can increase or decrease from there. The table below lets you know how many points you spend per increment or decrement. Currently it is set to RAW rules where you can't get above a 15 unless it is through racial traits.</p>
      <h1>{abilityScore}</h1>
      <img src={pointbuy} alt='cost'/>
    </div>
    <hr></hr>
    <div>
      <button onClick={() => updateScores('plus', 'strength')}>+</button>
      <button onClick={() => updateScores('minus', 'strength')}>-</button>
      <h4>Strength {strScore} + Racial: {racialStr} = Total: {totalStr}</h4>
      <h3>Modifier: {strMod()} </h3>
    </div>
    <hr></hr>
    <div>
    <button onClick={() => updateScores('plus', 'dexterity')}>+</button>
      <button onClick={() => updateScores('minus', 'dexterity')}>-</button>
      <h4>Dexterity {dexScore} + Racial: {racialDex} = Total: {totalDex}</h4>
      <h3>Modifier: {dexMod()}</h3>
    </div>
    <hr></hr>
    <div>
    <button onClick={() => updateScores('plus', 'constitution')}>+</button>
      <button onClick={() => updateScores('minus', 'constitution')}>-</button>
      <h4>Constitution {conScore} + Racial: {racialCon} = Total: {totalCon}</h4>
      <h3>Modifier: {conMod()}</h3>
    </div>
    <hr></hr>
    <div>
    <button onClick={() => updateScores('plus', 'intelligence')}>+</button>
      <button onClick={() => updateScores('minus', 'intelligence')}>-</button>
      <h4>Intelligence {intScore} + Racial: {racialInt} = Total: {totalInt}</h4>
      <h3>Modifier: {intMod()}</h3>
    </div>
    <hr></hr>
    <div>
    <button onClick={() => updateScores('plus', 'wisdom')}>+</button>
      <button onClick={() => updateScores('minus', 'wisdom')}>-</button>
      <h4>Wisdom {wisScore} + Racial: {racialWis} = Total: {totalWis}</h4>
      <h3>Modifier: {wisMod()}</h3>
    </div>
    <hr></hr>
    <div>
    <button onClick={() => updateScores('plus', 'charisma')}>+</button>
      <button onClick={() => updateScores('minus', 'charisma')}>-</button>
      <h4>Charisma {chaScore} + Racial: {racialCha} = Total: {totalCha}</h4>
      <h3>Modifier: {chaMod()}</h3>
    </div>
    <hr></hr>
    <div>
    <button onClick={() => updateScores('plus', 'custom')}>+</button>
      <button onClick={() => updateScores('minus', 'custom')}>-</button>
      <h4>Custom {cusScore} + Racial: {racialCus} = Total {totalCus}</h4>
      <h3>Modifier: {cusMod()}</h3>
    </div>

    </div>
  );
}



export default App;
