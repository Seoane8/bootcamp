export const Weather = ({weatherInfo, capital}) => {
    const {
        temperature,
        wind_speed,
        wind_dir,
        weather_icons,
        weather_descriptions
    } = weatherInfo

    const weather_icons_descriptions = weather_icons.reduce(
        (list, useIcon, idx) => [
            ...list,
            {
                icon:useIcon,
                description: weather_descriptions[idx]
            }
        ], []
    )

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <p><strong>Temperature: </strong>{temperature} Celsius</p>
            {weather_icons_descriptions.map(
                ({icon, description}) => <img key={description} src={icon} alt={description}/>
            )}
            <p><strong>Wind: </strong>{wind_speed} mph direction {wind_dir}</p>

        </div>
    )
}