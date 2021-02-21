import React, {useState} from 'react'
import {Person} from "./Person";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const handleChange = (event) =>
        setNewName(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            name: newName
        }

        setPersons(prevPersons => [...prevPersons, newPerson])
        setNewName('')
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input type='text' onChange={handleChange} value={newName}/>
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
