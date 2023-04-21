import React from 'react'
import "./Languages.css"
const Languages = ({languages}) => {
  return (
      <div className='div-card'>
        <h2>Languages</h2>
        <p>{languages.language}</p>
        <p>{languages.wrlevel}</p>
        <p>{languages.splevel}</p>
      </div>
  )
}

export default Languages