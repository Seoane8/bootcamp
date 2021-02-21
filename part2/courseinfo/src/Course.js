
const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => {
    return parts.map(
            ({name, exercises, id}) =>
                <Part key={id} name={name} exercises={exercises} />)
}

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

export const Course = ({name, parts}) => {
    return <div>
        <Header course={name} />
        <Content parts={parts}/>
    </div>
}