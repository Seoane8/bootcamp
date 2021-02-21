

export const Country = (props) => {
    const {
        name,
        capital,
        population,
        languages,
        flag
    } = props

    return (
        <div>
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h4>Languages</h4>
            <ul>
                {languages.map( ({name, iso639_1}) =>
                    <li key={iso639_1}>{name}</li>
                )}
            </ul>
            <img src={flag} alt={`Flag of ${name}`}/>
        </div>
    )
}