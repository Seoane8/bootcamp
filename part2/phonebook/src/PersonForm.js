export const PersonForm = ({newPerson, setNewPerson, setPersons, INITIAL_NEW_PERSON}) => {

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