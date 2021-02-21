import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.getElementById('root')

const Anecdote = ({anecdote, votes}) => {
    return (
        <div>
            <p>{anecdote}</p>
            <p>Has {votes} votes</p>
        </div>
    )
}

const App = ({anecdotes}) => {
    const initialArray = new Array(anecdotes.length).fill(0)
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(initialArray)

    const handleClick = () => {
        const randomNum = Math.round(Math.random() * (anecdotes.length-1))
        return setSelected(randomNum)
    }

    const handleVote = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
    }

    const [maxVotes, maxIdx] = votes.reduce(
        ([maxVal, maxIdx], val, idx) => val > maxVal ? [val, idx] : [maxVal, maxIdx],
        [0,-1]
    )

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleClick}>next anecdote</button>
            <h2>Anecdote with most votes</h2>
            { maxIdx === -1 ?
                <p>No votes yet</p> :
                <Anecdote anecdote={anecdotes[maxIdx]} votes={maxVotes}/>
            }

        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, rootElement)
