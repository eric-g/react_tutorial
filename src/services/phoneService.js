import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const response = axios.get(baseUrl);
    return response.then(response => response.data)
}

const create = (newPerson) => {
    const personToAdd = {
        name: newPerson.name,
        number: newPerson.number
    }
    const response = axios.post(baseUrl, personToAdd);
    return response.then(response => response.data)
};

const deleteNum = (id) => {
    const response = axios.delete(`${baseUrl}/${id}`);
    return response.then(response => response.data)
}   

const update = (id, newPerson) => {
    const response = axios.put(`${baseUrl}/${id}`, newPerson);
    return response.then(response => response.data)
}   

export default {
    getAll, create, deleteNum, update
};