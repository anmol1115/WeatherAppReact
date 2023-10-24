import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

function Search(props) {
  const [cities, setCities] = useState([])
  const { city, setCity } = props

  useEffect(() => {
    setCities([])
  }, [city])

  return (
    <>
      <SearchBar setCities={setCities} city={city}/>
      {cities.length > 0 && <SearchResults cities={cities} setCity={setCity}/>} 
    </>
  )
}

export default Search