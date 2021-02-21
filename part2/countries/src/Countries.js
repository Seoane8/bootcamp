import {Country} from "./Country";

export const Countries = ({countriesList, setFilter}) => {

    const handleClick = (countryName) => () => setFilter(countryName)

    return (
        countriesList.length === 1 ?
            <Country {...countriesList[0]}/> :
            <div>
                {countriesList.map( ({name, alpha3Code}) =>
                    <div key={alpha3Code}>
                        <span>{name}</span>
                        <button onClick={handleClick(name)}>show</button>
                    </div>
                )}
            </div>
    )
}