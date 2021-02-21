import {Country} from "./Country";

export const Countries = ({countriesList, setFilter}) => {

    const handleClick = (countryName) => () => setFilter(countryName)

    return (
        countriesList.length === 1 ?
            <Country {...countriesList[0]}/> :
            <div>
                {countriesList.map( ({name}) =>
                    <div>
                        <span key={name}>{name}</span>
                        <button onClick={handleClick(name)}>show</button>
                    </div>
                )}
            </div>
    )
}