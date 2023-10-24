import React from 'react'
import img from '../notFound.png'

function NotFound(props) {
  const { view } = props
  
  return (
    <div className={`flex justify-center ${(view && view==="notFound")?"h-44":"h-0"}`}>
        <img className='' src={img} alt="notFound" />
    </div>
  )
}

export default NotFound