import Weather from './Weather'

const Country = ({countries, handleShowCountry}) => {

    if (countries.length === 0 || countries.length > 10) {
        return <p>Apply more filtering</p>
    }

    if (countries.length > 1 && countries.length <= 10) {

        return (
            <ul>
                {countries.map(country =>
                <li key={country.ccn3}>
                    {country.name.common} <button onClick={() => handleShowCountry(country)}>Show</button></li>)}
            </ul>
        )
    } else if (countries.length === 1) {
        const country = countries[0]
        return (
            <div>
                <h2>
                 {country.name.common}
                </h2>
                <div>Capital: {country.capital}</div>
                <div>Area: {country.area}</div>
                <h3>Languages</h3>
                <ul>
                    {
                        Object.values(country.languages).map((language, index) =>
                            <li key={index}>{language}</li>
                    )}
                </ul>
                <h3>Flag</h3>
                {country.flags.png ? <img src={country.flags.png} alt="flag" /> : null}
                <h3>News Networks in {country.name.common}</h3>
                <Weather country={country} />
            </div>
        )
    }
}

export default Country
