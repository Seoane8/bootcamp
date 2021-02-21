import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.getElementById('root')

const Button = ({text, handle}) => <button onClick={handle}>{text}</button>

const Statistic = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {

    const average =  (good - bad) / (good + bad + neutral)
    const positive =  good / (good + bad + neutral) * 100

    return (
        <div>
            <Statistic text={'good'} value={good} />
            <Statistic text={'neutral'} value={neutral} />
            <Statistic text={'bad'} value={bad} />
            <Statistic text={'average'} value={average} />
            <Statistic text={'positive'} value={positive} />
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
            <Button text={'good'} handle={handleGood} />
            <Button text={'neutral'} handle={handleNeutral} />
            <Button text={'bad'} handle={handleBad} />
            <h2>statistics</h2>
            {(good + neutral + bad) === 0 ?
                <p>No feedback given</p> :
                <Statistics good={good} neutral={neutral} bad={bad}/>
            }
        </div>
    )
}

ReactDOM.render(<App />, rootElement)
