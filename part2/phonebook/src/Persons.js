import {Person} from "./Person";

export const Persons = ({data, filter}) => {

    return (
        <ul>
            {data
                .filter(({name}) =>
                    name.toLowerCase().includes(filter.toLowerCase())
                )
                .map(person =>
                    <Person key={person.name} {...person}/>
                )
            }
        </ul>
    )
}