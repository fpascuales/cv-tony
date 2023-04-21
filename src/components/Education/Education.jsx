import React from "react";
import "./Education.css";
const Education = ({ education }) => {
  return (
    <div className="div-card">
      <div className="card">
        <h2>Education</h2>
        <div>
          {education.map((value) => {
            return (
              <div key={value.name}>
                <p>{value.name}</p>
                <p>{value.date}</p>
                <p>{value.where}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
