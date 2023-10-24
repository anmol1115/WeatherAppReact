import React, { useState, useEffect } from 'react'
import Search from './Search'
import NotFound from './NotFound'
import Weather from './Weather'

function Card() {
  const [city, setCity] = useState(null)
  const [view, setView] = useState(null)
  const [wResp, setWResp] = useState(null)

  async function getWeather() {
    const url = `http://api.weatherstack.com/current?access_key=71ec10ef55c44bee5321ae730135ba43&query=${city}`

    const resp = await fetch(url)
    const json = await resp.json()
    return json
  }

  useEffect(() => {
    if (city !== null) {
      getWeather().then((json) => {
        if (json.success === false) {
          setView("notFound")
        } else {
          setView("Found")
          setWResp(json)
        }
      })
    }
  
  // eslint-disable-next-line
  }, [city])
  
  return (
    <div className={`flex flex-col justify-between bg-gradient-to-b from-[#8f7087] to-white w-2/6 min-w-fit p-2 rounded-md shadow-sm shadow-slate-500 transition-height duration-500 ease-in-out ${view?"h-80":"h-10"}`}>
      <Search city={city} setCity={setCity}/>
      {view && <NotFound view={view}/>}
      {view && <Weather view={view} resp={wResp}/>}
    </div>
  )
}

export default Card