import React from "react";
import "./About.css"
const About = ({ hero, about }) => {
  return (
    <div className="div-card">
      <img src={hero.image} alt="Tony" />
      <div className="card">
        <h2>
          {hero.name} {hero.adress}
        </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>tony@starkindustries.com</a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>
          💾<a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
      <div>
        <h2>Saber más</h2>
      </div>
      <div className="card">
        <div>
          {about.map((value) => {
            return <p key={value.info}> {value.info}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
