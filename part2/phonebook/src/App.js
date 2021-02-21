import React, {useState, useEffect} from 'react'
import {PersonForm} from "./PersonForm"
import {Filter} from "./Filter"
import {Persons} from "./Persons"
import {getPersons} from "./service";

const INITIAL_NEW_PERSON = {
    name: '',
    tfno: ''
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newPerson, setNewPerson] = useState(INITIAL_NEW_PERSON)
    const [filter, setFilter] = useState('')


    useEffect(() => {
        getPersons()
            .then(persons => setPersons(persons))
    }, [])


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
                persons={persons}
                setPersons={setPersons}
                INITIAL_NEW_PERSON={INITIAL_NEW_PERSON}
            />
            <h2>Numbers</h2>
            {persons.length === 0 ?
                <p>Empty list</p> :
                <Persons
                    data={persons}
                    setPersons={setPersons}
                    filter={filter}
                />
            }

        </div>
    )
}

export default App
