import { useState, useEffect } from 'react'
import CountryFilter from './components/CountryFilter'
import countryService from './services/countryService'
import Country from './components/Country'
import './index.css'

const App = () => {
  const [filterx, setFilterx] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(response => {
        setAllCountries(response)
      })
  },[])

  const setMyFilter = (val) => {
    const response = countryService
      .getFiltered(allCountries, val)
    setCountries(response)
  }

  const handleShowCountry = (country) => {
    const filtered = allCountries.filter(fcountry => fcountry.name.common === country.name.common)
    setFilterx(country.name.common)
    setCountries(filtered)
  } 

  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilterx(event.target.value)
    setMyFilter(event.target.value)
  }

  return (
    <div>
      <CountryFilter value={filterx} handleFilterChange={handleFilterChange} />
      <Country countries={countries} handleShowCountry={handleShowCountry} />
    </div>
  )
}

export default App