import axios from "axios"

const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    const response = axios.get(url)
    return response
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching countries:", error)
            return []
        })
}

const getFiltered = (countries, val) => {
    if (!val) {
        return []
    }

    return countries.filter(row => row.name.common.toLowerCase().includes(val.toLowerCase()))
        
}

const getWeather = (country) => {
    const NEWS_API_URL = 'http://localhost:8080/https://newsapi.org/v2/top-headlines/sources'

    const config = {
        params: {
        country: country.cca2.toLowerCase()
        },
        headers: {
            'X-Api-Key': '' // removed
        }
    }
    
    const response = axios.get(NEWS_API_URL, config)
    return response
        .then(response => response.data)
}


export default {
            getFiltered,
            getAll,
            getWeather
        }
