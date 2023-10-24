import React, { useState, useEffect, useRef } from 'react'

function SearchBar(props) {
    const searchBar = useRef("")
    const [searchTerm, setSearchTerm] = useState("")
    const { city, setCities } = props

    useEffect(() => {
        const delay = setTimeout(() => {
            if (searchTerm) {
                getCity(searchTerm).then((json) => {
                    let cities = []
                    let unique = new Set()
                    json.data.forEach((element) => {
                        if (!unique.has(JSON.stringify({ "city": element.city, "country": element.country }))) {
                            cities.push({ "city": element.city, "country": element.country, "id": element.id })
                        }
                        unique.add(JSON.stringify({ "city": element.city, "country": element.country }))
                    })
                    setCities(cities)
                })
            } else {
                setCities([])
            }
        }, 600)

        return () => {
            clearTimeout(delay)
        }
        // eslint-disable-next-line
    }, [searchTerm])

    async function getCity(name) {
        const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${name}&limit=10`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7dc4579659msh2bec93116504ee5p1b78d2jsn950c421a8806',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        }

        try {
            let resp = await fetch(url, options)
            let json = await resp.json()
            return json
        } catch (err) {
            return { err }
        }
    }

    useEffect(() => {
        searchBar.current.value = city
    }, [city])

    return (
        <div className='flex flex-row justify-between mx-4 items-center '>
            <i className='fa-solid fa-location-crosshairs'></i>
            <input ref={searchBar} className='focus:outline-none focus:placeholder:opacity-0 bg-transparent text-white placeholder-white text-center rounded-md' placeholder='Enter your city' onChange={(e) => { setSearchTerm(e.target.value) }}></input>
            <i className='fa-solid fa-magnifying-glass-location'></i>

        </div>
    )
}

export default SearchBar