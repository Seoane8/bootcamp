import {postPerson, updatePerson} from "./service";

export const PersonForm = ({newPerson, setNewPerson, persons, setPersons, INITIAL_NEW_PERSON}) => {

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

        const personsWithSameName = persons.filter(({name}) => name === newPerson.name)

        if (personsWithSameName.length !== 0) {
            return submitAddedPerson(personsWithSameName[0])
        }

        postPerson(newPerson).then(
            person => setPersons(prevPersons => [...prevPersons, person])
        )

        setNewPerson(INITIAL_NEW_PERSON)
    }

    const submitAddedPerson = ({id}) => {
        const update = window.confirm(
            `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
        )

        if (!update) {
            return
        }

        updatePerson(newPerson, id).then(
            updatedPerson => setPersons(prevPersons =>
                prevPersons.reduce((newPersons, person) =>
                    person.id === id ?
                        [...newPersons, updatedPerson] :
                        [...newPersons, person],
                    []
                )
            )
        )
    }

    return (
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
    )
}