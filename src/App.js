
import { useState } from 'react';

function App() {
  const [bottles, setBottles] = useState(0)
  const [litres, setLitres] = useState(0)
  const [grams, setGrams] = useState(0)
  const [weight, setWeight] = useState(0)
  const [burning, setBurning] = useState(0)
  const [gramsleft, setGramsleft] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function calculate(){
    setLitres(bottles * 0.33)
    setGrams(litres * 8 * 4.5)
    setBurning(weight / 10)
    setGramsleft(grams - (burning * time))
    if (gender === 'male') {
    setResult(gramsleft / (weight * 0.7))
    } else {
    setResult(gramsleft / (weight * 0.6))
    }
  }
  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input value={weight} onChange={e => setWeight(e.target.value)} type="number"/>
      </div>
      <div>
        <label>Bottles</label>
        <input value={bottles} onChange={e => setBottles(e.target.value)} type="number"/>
      </div>
      <div>
        <label>Time</label>
        <input value={time} onChange={e => setTime(e.target.value)} type="number"/>
      </div>
      <div>
        <label>Gender</label>
        <input value="male" name="gender" type="radio" onChange={e => setGender(e.target.value)}/>Male
        <input value="female" name="gender" type="radio" onChange={e => setGender(e.target.value)}/>Female
      </div>
      <div>
        <label></label>
        <output>{result.toFixed(1)}</output>
      </div>
      <button type="button" onClick={calculate}>Calculate</button>
    </form>
  );
}

export default App;