const CountryFilter = ({value, handleFilterChange} ) => {
    return (
        <div>
            <h2>Find Countries</h2>
            <input value={value} onChange={handleFilterChange} />
        </div>
    )
}

export default CountryFilter