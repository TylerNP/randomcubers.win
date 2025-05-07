import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href = "https://op.gg/lol/summoners/na/RandomCubers-NA1"> OP.GG </a>
      </div>
      <h1>Randomcubers.win</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
