import React, {useState} from 'react'
import {PersonForm} from "./PersonForm";
import {Filter} from "./Filter";
import {Persons} from "./Persons";

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


    return (
        <div>
            <h1>Phonebook</h1>
            <Filter
                filter={filter}
                setFilter={setFilter}
            />
            <h2>Add a new</h2>
            <PersonForm
                newPerson={newPerson}
                setNewPerson={setNewPerson}
                setPersons={setPersons}
                INITIAL_NEW_PERSON={INITIAL_NEW_PERSON}
            />
            <h2>Numbers</h2>
            <Persons
                data={persons}
                filter={filter}
            />
        </div>
    )
}

export default App
