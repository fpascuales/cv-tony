import './App.css'
import { useState } from 'react'
import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import { More } from './components/More/More'
import { CV } from "./CV/CV"

const { hero, education, experience, languages, habilities, volunteer } = CV;
function App() {
  const [showInfo, setShowInfo] = useState("experience");
  return (
    <div>
      <About hero={hero} about={hero.aboutMe} />
      <div className="b-button">
        <button className="btn" onClick={() => setShowInfo("experience")}>
          Experience
        </button>
        <button className="btn" onClick={() => setShowInfo("education")}>
          Education
        </button>
      </div>
      <div>
        {showInfo === "experience" ? (
          <Experience experience={experience} />
        ) : (
          <Education education={education} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
}

export default App
