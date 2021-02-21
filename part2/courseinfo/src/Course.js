
const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => {
    return (
        <>
            <Part name={parts[0].name} exercises={parts[0].exercises}/>
            <Part name={parts[1].name} exercises={parts[1].exercises}/>
            <Part name={parts[2].name} exercises={parts[2].exercises}/>
        </>
    )
}

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

export const Course = ({course}) => {
    return <></>
}