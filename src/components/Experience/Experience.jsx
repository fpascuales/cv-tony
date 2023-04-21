import React from 'react'
import "./Experience.css"
const Experience = ({experience}) => {
  return (
    <div className="div-card">
      <div className="card">
        <h2>Experience</h2>
        <div>
          {experience.map((value) => {
            return (
              <div key={value.name}>
                <p>{value.name}</p>
                <p>{value.date}</p>
                <p>{value.where}</p>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience