import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [bal, setBal] = useState(1000);
  const [winnings, setWinning] = useState(0);

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
      <div className="name">
        <h2>
          Hello
        </h2>
        <form>
          <label >First name:</label><br/>
          <input type="text" id="fname" name="fname"/><br/>
          <label >Last name:</label><br/>
          <input type="text" id="lname" name="lname"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <div>
        <div>
            Your Balance ${bal.toFixed(2)} 
        </div>
        <button onClick={() => {
            if (bal > 0) {
            const val = Math.round(100000*(Math.random()-0.7))/100;
            setWinning(() => val);
            setBal((curr) => curr+val);
          } else {
            return;
          }
        }}>
          You Win
        </button>
        <WinText bal={bal} winnings={winnings}/>
      </div>
    </>
  );
}

interface winProp {
  bal: number,
  winnings: number,
}

function WinText(props: winProp) {
  if (props.bal > 0) {
    return <h3>
      ${props.winnings.toFixed(2)}
    </h3>;
  } else {
    return <h3>
      Not enough money
    </h3>;
  }
}

export default App
