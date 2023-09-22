import { useState } from 'react/cjs/react.production.min';
import './App.css';

function App() {
  const [ abilityScore, SetAbilityScore] = useState(27);

  return (
    <div >
      <h1>Choose your Race</h1>


      <h2>Choose your Stats</h2>

      <h4>Strength</h4>
      <h4>Dexterity</h4>
      <h4>Constitution</h4>
      <h4>Intelligence</h4>
      <h4>Wisdom</h4>
      <h4>Charisma</h4>
      <h4>Custom</h4>
    </div>
  );
}

export default App;
