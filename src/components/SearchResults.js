import React from 'react'

function SearchResults(props) {
    let { cities, setCity } = props

    return (
        <div className='bg-white max-h-[200px] overflow-y-scroll absolute left-0 ml-auto me-auto right-0 w-1/5 rounded-md'>
            {cities.map(({city, country, id}) => {
                return <div onClick={() => {setCity(`${city},${country}`)}} className='pt-1 hover:bg-slate-400 hover:cursor-pointer transition ease-in-out hover:text-white' id={id}>{city}, {country}</div>
            })}
        </div>
    )
}

export default SearchResults