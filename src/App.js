import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState("")
  const [disabled, setDisabled] = useState(false)

  const fetchAdvice = () => {
    setDisabled(true)
    setAdvice("Loading.... :)")
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(res => setAdvice(res.slip.advice))
      .then(res => setTimeout(() => setDisabled(false), 1000))
  }

  return (
    <div className="app">
      <div className='card'>
        <h2 className='heading'>{advice ? advice : "Hey, you looks like demotivated, get a advice from me now"}</h2>
        {!disabled && <button className='button' disabled={disabled} onClick={() => fetchAdvice()}>Give me a Advice</button>}

      </div>


    </div>
  );
}

export default App;
