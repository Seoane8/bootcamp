import {useEffect, useState} from "react";
import {Filter} from "./Filter";
import {getCountries} from "./service";
import {Countries} from "./Countries";

export function App() {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        getCountries().then(countries => setCountries(countries))
    }, [])


    const filterCountries = () => {
        const filteredCountries = countries
            .filter(({name}) =>
                name.toLowerCase().includes(filter.toLowerCase())
            )

        if (filteredCountries.length === 0) {
            return
        }
        if (filteredCountries.length > 10) {
            return <p>Too many matches, specify another filter</p>
        }
        return <Countries countriesList={filteredCountries} setFilter={setFilter}/>
    }

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter}/>
            {filterCountries()}
        </div>
    )
}