
const Header = ({course}) => <h2>{course}</h2>

const Content = ({parts}) => {
    const totalExercises =
        parts.reduce(
            (sum, {exercises}) => sum + exercises,
            0)

    return <div>
        {parts.map(
            ({name, exercises, id}) =>
                <Part key={id} name={name} exercises={exercises} />)}
        <p><strong>Total of {totalExercises} exercises</strong></p>
    </div>
}

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

export const Course = ({name, parts}) => {
    return <div>
        <Header course={name} />
        <Content parts={parts}/>
    </div>
}