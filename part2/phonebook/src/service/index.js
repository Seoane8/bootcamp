import axios from "axios";

const ENDPOINT = 'http://localhost:3001/persons'

export const getPersons = () => {
    return axios
        .get(ENDPOINT)
        .then(response => response.data)
}

export const postPerson = (person) => {
    return axios
        .post(ENDPOINT, person)
        .then(response => response.data)
}
