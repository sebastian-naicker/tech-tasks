import { useState } from 'react'
import './App.css';

function App() {
  const [shells, setShells] = useState([false,false,false,false,true])
  const [played, setPlayed] = useState(false)
  const [message, setMessage] = useState(null)
  
  const randomiseShells = () => {
    const newShells = [...shells]
    setShells(newShells.sort(() => Math.random() > .5 ? 1 : -1))
    setMessage(null)
    setPlayed(false)
  }
  
  const validateWin = (shell) => () => {
    setPlayed(true)
    
    if (shell) {
      setMessage('Correct!')
    } else {
      setMessage('Sorry, wrong guess!')
    }
  }
  
  return (
    <div className="App">
      <h1>Game of Shells</h1>
      
      {message ? (
        <h2>{message}</h2>
      ): (
        <h2>Find the shell. Hint: {`[${shells.toString()}]`}</h2>
      )}
      
      <div className='shells'>
        {shells.map((shell, i) => (
          <button className='shell' onClick={validateWin(shell)} key={i.toString()} disabled={played} />
        ))}
      </div>
      <div className='new-game-container'>
        <button onClick={randomiseShells}>New game</button>
      </div>
    </div>
  );
}

export default App;
