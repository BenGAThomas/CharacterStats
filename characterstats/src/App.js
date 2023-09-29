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


//This function is used for adding to the point buy cost
function addScore(abilityScore) {
  switch(abilityScore) {
    case 8:
      return 1;

    case 9:
    return 1;

    case 10:
      return 1;

    case 11:
    return 1;
        
    case 12:
    return 1;
    
    
    case 13:
    return 2;


    case 14:
    return 2;
        
        
    case 15:
    return 2;

      default: return 0; 
    
  
  } 
}



//This function is used to subtract from the point buy number
function subtractScore(abilityScore) {
  switch(abilityScore) {
    case 15:
    return -2;

    case 14:
      return -2;

    case 13:
      return -2;

    case 12:
      return -1;

    case 11:
      return -1;

    case 10:
      return -1;

    case 9:
      return -1;

    case 8:
      return -1;

      default: return 0;
  }
}

//this function is used for the math to update the scores of each ability 
//a stretch goal for this would be to change the majority of this code into an object with keys as the formula is the same for each ability.
function updateScores(plusOrMinus, attributeType) {


  switch(attributeType) {
    case 'strength':
      if (plusOrMinus === 'plus') {
        if (strScore >= 15) {
          return;
        } 
      setAbilityScore(abilityScore - addScore(strScore)); 
        setStrScore(strScore + 1);
      } else {
        if(strScore <= 8) {
          return;
        }
        setAbilityScore(abilityScore - subtractScore(strScore));
        setStrScore(strScore - 1);
      }
      break;

    case 'dexterity':
      if (plusOrMinus === 'plus') {
        if (dexScore >= 15) {
          return;
        } 
      setAbilityScore(abilityScore - addScore(dexScore)); 
        setDexScore(dexScore + 1);
      } else {
        if(dexScore <= 8) {
          return;
        }
        setAbilityScore(abilityScore - subtractScore(dexScore));
        setDexScore(dexScore - 1);
      }
      break;

      case 'constitution':
        if (plusOrMinus === 'plus') {
          if (conScore >= 15) {
            return;
          } 
        setAbilityScore(abilityScore - addScore(conScore)); 
          setConScore(conScore + 1);
        } else {
          if(conScore <= 8) {
            return;
          }
          setAbilityScore(abilityScore - subtractScore(conScore));
          setConScore(conScore - 1);
        }
        break;

        case 'intelligence':
          if (plusOrMinus === 'plus') {
            if (intScore >= 15) {
              return;
            } 
          setAbilityScore(abilityScore - addScore(intScore)); 
            setIntScore(intScore + 1);
          } else {
            if(intScore <= 8) {
              return;
            }
            setAbilityScore(abilityScore - subtractScore(intScore));
            setIntScore(intScore - 1);
          }
          break;

          case 'wisdom':
            if (plusOrMinus === 'plus') {
              if (wisScore >= 15) {
                return;
              } 
            setAbilityScore(abilityScore - addScore(wisScore)); 
              setWisScore(wisScore + 1);
            } else {
              if(wisScore <= 8) {
                return;
              }
              setAbilityScore(abilityScore - subtractScore(wisScore));
              setWisScore(wisScore - 1);
            }
            break;

            case 'charisma':
              if (plusOrMinus === 'plus') {
                if (chaScore >= 15) {
                  return;
                } 
              setAbilityScore(abilityScore - addScore(chaScore)); 
                setChaScore(chaScore + 1);
              } else {
                if(chaScore <= 8) {
                  return;
                }
                setAbilityScore(abilityScore - subtractScore(chaScore));
                setChaScore(chaScore - 1);
              }
              break;

              case 'custom':
                if (plusOrMinus === 'plus') {
                  if (cusScore >= 15) {
                    return;
                  } 
                setAbilityScore(abilityScore - addScore(cusScore)); 
                  setCusScore(cusScore + 1);
                } else {
                  if(cusScore <= 8) {
                    return;
                  }
                  setAbilityScore(abilityScore - subtractScore(cusScore));
                  setCusScore(cusScore - 1);
                }
                break;
      default:
        return;
  }
}


// These useEffects are used to get the total score for each of the abilities.
  useEffect(() => {
    setTotalStr(racialStr + strScore)
  }, [racialStr, strScore]);

  useEffect(() => {
    setTotalDex(racialDex + dexScore)
  }, [racialDex, dexScore]);

  useEffect(() => {
    setTotalCon(racialCon + conScore)
  }, [racialCon, conScore]);

  useEffect(() => {
    setTotalInt(racialInt + intScore)
  }, [racialInt, intScore])

  useEffect(() => {
    setTotalWis(racialWis + wisScore)
  }, [racialWis, wisScore])

  useEffect(() => {
    setTotalCha(racialCha + chaScore)
  }, [racialCha, chaScore])

  useEffect(() => {
    setTotalCus(racialCus + cusScore)
  }, [racialCus, cusScore])


//These useEffects are for each of the races.

//Another stretch goal would be to add the subraces to where when you click on one of the races that has a subrace i.e. dwarf or elf it has another drop down menu appear to where you can select the subrace

  useEffect(() => {

    if (raceSelected === 'Select') {
      setRacialStr(0);

      setRacialDex(0);
 
      setRacialCon(0);

      setRacialInt(0);

      setRacialWis(0);

      setRacialCha(0);

      setRacialCus(0);
    } else if (raceSelected === 'Human') {
      setRacialStr(1);

      setRacialDex(1);

      setRacialCon(1);

      setRacialInt(1);

      setRacialWis(1);

      setRacialCha(1);

      setRacialCus(1);

    } else if (raceSelected === 'Elf') {
      setRacialStr(0);

      setRacialDex(2);
 
      setRacialCon(0);

      setRacialInt(0);

      setRacialWis(0);

      setRacialCha(0);

      setRacialCus(0);
    } else if (raceSelected === 'Dwarf') {
      setRacialStr(0);

      setRacialDex(0);

      setRacialCon(2);

      setRacialInt(0);

      setRacialWis(0);

      setRacialCha(0);

      setRacialCus(0);

    } else if (raceSelected === 'Dragonborn') {
      setRacialStr(2);

      setRacialDex(0);

      setRacialCon(0);

      setRacialInt(0);

      setRacialWis(0);

      setRacialCha(1);

      setRacialCus(0);

    } else if (raceSelected === 'Gnome') {
      setRacialStr(0);

      setRacialDex(0);

      setRacialCon(0);

      setRacialInt(2);


      setRacialWis(0);


      setRacialCha(0);


      setRacialCus(0);

    } else if (raceSelected === 'Half-Elf') {
      setRacialStr(0);

      setRacialDex(1);

      setRacialCon(0);

      setRacialInt(1);

      setRacialWis(0);

      setRacialCha(2);

      setRacialCus(0);

    } else if (raceSelected === 'Halfling') {
      setRacialStr(0);

      setRacialDex(2);

      setRacialCon(0);

      setRacialInt(0);

      setRacialWis(0);

      setRacialCha(0);

      setRacialCus(0);
    } else if (raceSelected === 'Half-Orc') {
      setRacialStr(2);

      setRacialDex(0);

      setRacialCon(1);

      setRacialInt(0);

      setRacialWis(0);

      setRacialCha(0);

      setRacialCus(0);
    } else if (raceSelected === 'Tiefling') {
      setRacialStr(0);

      setRacialDex(0);

      setRacialCon(0);

      setRacialInt(1);

      setRacialWis(0);

      setRacialCha(2);

      setRacialCus(0);
    };
  }, [raceSelected])



//Formula to get the ability modifier for each stat

//Another stretch goal would be to make an object with key's since the formula is the same for all of them

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


//This function is used to reload the page without having to hit refresh
function reset() {
  window.location.reload(false);
}

  return (
    <div>
        <h1>Choose your Race</h1>
        <label className='raceSelection'>
          <select 
            value={raceSelected}
            onChange={e => setRaceSelected(e.target.value)}
          >
            <option value="Select">Select</option>
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

    <div>
      <p>You start out with 27 ability points to spend. Your base stats start at 8 and can increase from there. The table below lets you know how many points you spend per increment or decrement. Currently it is set to RAW rules where you can't get above a 15 unless it is through racial traits.</p>

      <h1>Choose your Stats</h1>

      <h2>{abilityScore}</h2>
      <img src={pointbuy} alt='cost'/>
      <button className='resetButton' type='button' onClick={reset}>Reset your points</button>
    </div>
    <hr></hr>
    {/* <div>
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
    </div> */}



    <div>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Ability Score</th>
            <th>Racial Bonus</th>
            <th>Total</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Strength</td>
          <td>{strScore}
            <button onClick={() => updateScores('plus', 'strength')}>+</button>
            <button onClick={() => updateScores('minus', 'strength')}>-</button>
          </td>
          <td>{racialStr}</td>
          <td>{totalStr}</td>
          <td>{strMod()}</td>
        </tr>

        <tr className='offColor'>
          <td>Dexterity</td>
          <td>{dexScore}    
            <button onClick={() => updateScores('plus', 'dexterity')}>+</button>
            <button onClick={() => updateScores('minus', 'dexterity')}>-</button>
          </td>
          <td>{racialDex}</td>
          <td>{totalDex}</td>
          <td>{dexMod()}</td>
        </tr>

        <tr>
          <td>Constitution</td>
          <td>{conScore}
            <button onClick={() => updateScores('plus', 'constitution')}>+</button>
            <button onClick={() => updateScores('minus', 'constitution')}>-</button>
          </td>
          <td>{racialCon}</td>
          <td>{totalCon}</td>
          <td>{conMod()}</td>
        </tr>

        <tr className='offColor'>
          <td>Intelligence</td>
          <td>{intScore}
            <button onClick={() => updateScores('plus', 'intelligence')}>+</button>
            <button onClick={() => updateScores('minus', 'intelligence')}>-</button>
          </td>
          <td>{racialInt}</td>
          <td>{totalInt}</td>
          <td>{intMod()}</td>
        </tr>

        <tr>
          <td>Wisdom</td>
          <td>{wisScore}
            <button onClick={() => updateScores('plus', 'wisdom')}>+</button>
            <button onClick={() => updateScores('minus', 'wisdom')}>-</button>
          </td>
          <td>{racialWis}</td>
          <td>{totalWis}</td>
          <td>{wisMod()}</td>
        </tr>

        <tr className='offColor'>
          <td>Charisma</td>
          <td>{chaScore}
            <button onClick={() => updateScores('plus', 'charisma')}>+</button>
            <button onClick={() => updateScores('minus', 'charisma')}>-</button>
          </td>
          <td>{racialCha}</td>
          <td>{totalCha}</td>
          <td>{chaMod()}</td>
        </tr>


        <tr>
          <td>Custom</td>
          <td>{cusScore}    
            <button onClick={() => updateScores('plus', 'custom')}>+</button>
            <button onClick={() => updateScores('minus', 'custom')}>-</button>
          </td>
          <td>{racialCus}</td>
          <td>{totalCus}</td>
          <td>{cusMod()}</td>
        </tr>
        </tbody>
      </table>
    </div>

    </div>
  );
}



export default App;
