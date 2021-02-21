export const Filter = ({filter, setFilter}) => {
    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            find countries: <input type='text' onChange={handleFilter} value={filter}/>
        </div>
    )
}