import React, { useState } from 'react'


const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  if (sum === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } 
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={sum} />
        <StatisticLine text='average' value={(props.good * 1 + props.neutral * 0 + props.bad * (-1))/sum} />
        <StatisticLine text='positive' value={`${parseFloat(props.good / sum) * 100 } %`}/>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
return (
  <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
)
}

const Button = (props) => {
  return (
    <span>
      <button onClick={props.handleClick} >{props.text}</button>
    </span>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={addGood} text='good'/>
        <Button handleClick={addNeutral} text='neutral'/>
        <Button handleClick={addBad} text='bad'/>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
