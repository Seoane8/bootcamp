import React, {useState} from 'react'
import {Person} from "./Person";

const INITIAL_PERSONS = [
    { name: 'Arto Hellas', tfno: '040-123456' },
    { name: 'Ada Lovelace', tfno: '39-44-5323523' },
    { name: 'Dan Abramov', tfno: '12-43-234345' },
    { name: 'Mary Poppendieck', tfno: '39-23-6423122' }
]

const INITIAL_NEW_PERSON = {
    name: '',
    tfno: ''
}

const App = () => {
    const [persons, setPersons] = useState(INITIAL_PERSONS)
    const [newPerson, setNewPerson] = useState(INITIAL_NEW_PERSON)
    const [filter, setFilter] = useState('')

    const handleChangeName = (event) =>
        setNewPerson(prevPerson => ({
            name: event.target.value,
            tfno: prevPerson.tfno
        }))

    const handleChangeTfno = (event) =>
        setNewPerson(prevPerson => ({
            name: prevPerson.name,
            tfno: event.target.value
        }))

    const handleSubmit = (event) => {
        event.preventDefault()

        setPersons(prevPersons => {
            const personsWithSameName = prevPersons.filter(({name}) => name === newPerson.name)

            if (personsWithSameName.length !== 0) {
                alert(`${newPerson.name} is already added to phonebook`)
                return [...prevPersons]
            }

            return [...prevPersons, newPerson]
        })
        setNewPerson(INITIAL_NEW_PERSON)
    }

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }


    return (
        <div>
            <h1>Phonebook</h1>
            <div>
                filter shown with: <input type='text' onChange={handleFilter} value={filter}/>
            </div>
            <h2>Add a new</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input type='text' onChange={handleChangeName} value={newPerson.name}/>
                </div>
                <div>
                    number: <input type='text' onChange={handleChangeTfno} value={newPerson.tfno}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons
                    .filter( ({name}) =>
                        name.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map( person =>
                        <Person key={person.name} {...person}/>
                    )
                }
            </ul>
        </div>
    )
}

export default App
