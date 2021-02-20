import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.getElementById('root')

const Statistics = ({good, neutral, bad}) => {

    const average =  (good - bad) / (good + bad + neutral)
    const positive =  good / (good + bad + neutral) * 100

    return (
        <div>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
        </div>
    )

}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, rootElement)
