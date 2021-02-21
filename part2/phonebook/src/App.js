import React, {useState, useEffect} from 'react'
import {PersonForm} from "./PersonForm"
import {Filter} from "./Filter"
import {Persons} from "./Persons"
import axios from 'axios'

const INITIAL_NEW_PERSON = {
    name: '',
    tfno: ''
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newPerson, setNewPerson] = useState(INITIAL_NEW_PERSON)
    const [filter, setFilter] = useState('')

    const getDataFromServer = () => {
        return axios
            .get('http://localhost:3001/persons')
            .then(response => response.data)
    }

    useEffect(() => {
        getDataFromServer()
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
                setPersons={setPersons}
                INITIAL_NEW_PERSON={INITIAL_NEW_PERSON}
            />
            <h2>Numbers</h2>
            {persons.length === 0 ?
                <p>Empty list</p> :
                <Persons
                    data={persons}
                    filter={filter}
                />
            }

        </div>
    )
}

export default App
