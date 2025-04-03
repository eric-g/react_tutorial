import countryService from '../services/countryService'
import { useState, useEffect } from 'react'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState([[]])

    useEffect(() => {
        countryService
          .getWeather(country)
          .then(response => {
            setWeather(response.sources)
          })
      },[])

    console.log("Weather data: ", weather)
    
    return ( 
        <div>
            <ul>
           {weather.map((item, i) => <li key={i}><a href={item.url}>{item.name}</a></li>)}
           </ul>
        </div>
    )
}

export default Weather