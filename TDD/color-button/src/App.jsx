import { useState } from 'react'
import './App.css'

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <>
      <button onClick={() => setButtonColor(newColor)} style={{ backgroundColor: buttonColor }}>change to {newColor}!</button>
    </>
  )
}

export default App
