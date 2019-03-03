import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
    return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = (props) => {
 
    const good = props.parts[0]
    const neutral = props.parts[1]
    const bad = props.parts[2]
    const allSummed = good + bad + neutral
    const mean = good - bad
    const positives = (good/allSummed)*100
    if (allSummed >= 1){
    return (
    <div> 
    <table>
        <tbody>
    <Statistic text="hyvä" value ={good} />
    <Statistic text="neutraali" value ={neutral} />
    <Statistic text="huono" value ={bad} />
    <Statistic text="yhteensä" value ={allSummed} />
    <Statistic text="keskiarvo" value ={mean} />
    <Statistic text="positiivisia" value ={positives+'%'} />
    </tbody>
   </table>
    </div> )} else return <div>
    <p>Ei yhtään palautetta annettu</p>
    </div>
}

const Button = ({ handleClick, text}) => (
<button onClick={handleClick}>
{text}
 </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }
  

  return ( 
    <div>
    <h1>anna palautetta</h1>
    <Button handleClick={handleGoodClick} text='good' />
    <Button handleClick={handleNeutralClick} text='neutral'/>
    <Button handleClick={handleBadClick} text='bad'/>
    <h1>statistiikka</h1>
    <Statistics parts = {[good, neutral, bad]} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)