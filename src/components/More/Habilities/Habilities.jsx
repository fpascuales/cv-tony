import React from 'react'
import "./Habilities.css"
const Habilities = ({habilities}) => {
  return (
    <div className='div-card'>
      <h2>Habilities</h2>
      <div>
        {
          habilities.map((value) => {
            return (
              <p key={value}>{value}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default Habilities