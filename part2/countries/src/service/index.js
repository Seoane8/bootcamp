import axios from 'axios'

export const getCountries = () => {
    return axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            const {data} = response
            return data
        })
}

export const getWeather = (city) => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    return axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
        .then(response => {
            const {data} = response
            return data
        })

}