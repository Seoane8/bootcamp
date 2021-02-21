import {getWeather} from "./service";
import {useEffect, useState} from "react";
import {Weather} from "./Weather";

export const Country = (props) => {
    const {
        name,
        capital,
        population,
        languages,
        flag
    } = props

    const [weatherInfo, setWeatherInfo] = useState({})

    useEffect(() => {
        getWeather(capital).then(data =>
            setWeatherInfo(data.current)
        )
    }, [capital])


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
            {Object.keys(weatherInfo).length !== 0 ?
                <Weather weatherInfo={weatherInfo} capital={capital}/> :
                <></>
            }
        </div>
    )
}