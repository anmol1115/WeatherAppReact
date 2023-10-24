import React from 'react'

function Weather(props) {
  const { view, resp } = props
  return (
    <div className={`${view && view === "Found"?"h-fit":"h-0"} overflow-hidden flex flex-col space-y-8`}>
        <div className='flex flex-col items-center'>
            <img src={resp.current.weather_icons} alt="" />
            <p>{resp.current.temperature} °C</p>
        </div>
        <div className='flex flex-row justify-between p-5'>
            <div className='flex flex-col items-center justify-center'>
                <p>Wind Speed</p>
                <p>{resp.current.wind_speed} km/h</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <div className='flex flex-col items-center'>
                    <p>Pressure</p>
                    <p>{resp.current.pressure} MB</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p>Local Time</p>
                    <p>{resp.location.localtime.split(' ')[1]}</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p>Humidity</p>
                <p>{resp.current.humidity} %</p>
            </div>
        </div>
    </div>
  )
}

export default Weather