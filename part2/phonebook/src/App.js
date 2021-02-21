import React, {useState} from 'react'
import {Person} from "./Person";

const INITIAL_NEW_PERSON = {
    name: '',
    tfno: ''
}

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            tfno: '223413598'
        }
    ])
    const [newPerson, setNewPerson] = useState(INITIAL_NEW_PERSON)

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


    return (
        <div>
            <h2>Phonebook</h2>
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
                {persons.map(
                    person => <Person key={person.name} {...person}/>
                )}
            </ul>
        </div>
    )
}

export default App
