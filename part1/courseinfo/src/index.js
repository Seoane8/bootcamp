import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => {
    return (
        <>
            <Part part={parts[0].name} exercises={parts[0].exercises}/>
            <Part part={parts[1].name} exercises={parts[1].exercises}/>
            <Part part={parts[2].name} exercises={parts[2].exercises}/>
        </>
    )
}

const Part = ({part, exercises}) => <p>{part} {exercises}</p>

const Total = ({totalExercises}) => <p>Number of exercises {totalExercises}</p>

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content
                parts={[part1, part2, part3]}
            />
            <Total  totalExercises={part1.exercises + part2.exercises + part3.exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))