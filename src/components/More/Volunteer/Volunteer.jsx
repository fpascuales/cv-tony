import React from 'react'
import "./Volunteer.css"
const Volunteer = ({volunteer}) => {
  return (
    <div className='div-card'>
      <h2>Volunteer</h2>
      <div>
        {volunteer.map((value) => {
          return (
            <div key={value.name}>
              <p>{value.name}</p>
              <p>{value.where}</p>
              <p>{value.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Volunteer