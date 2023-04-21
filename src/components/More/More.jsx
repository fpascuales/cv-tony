import React from 'react'
import "./More.css"
import { useState } from 'react'
import Languages from './Languages/Languages';
import Habilities from './Habilities/Habilities';
import Volunteer from './Volunteer/Volunteer';

export const More = ({ languages, habilities, volunteer }) => {
  const [showMore, setShowMore] = useState("languages");
  return (
    <div className="div-card">
      <h2>Más sobre mi</h2>
      <div className="b-button">
        <button className="btn" onClick={() => setShowMore("languages")}>
          Languages
        </button>
        <button className="btn" onClick={() => setShowMore("habilities")}>
          Habilities
        </button>
        <button className="btn" onClick={() => setShowMore("volunteer")}>
          Volunteer
        </button>
      </div>
      <div className="card">
        {showMore === "languages" ? (
          <Languages languages={languages} />
        ) : showMore === "habilities" ? (
          <Habilities habilities={habilities} />
        ) : (
          <Volunteer volunteer={volunteer} />
        )}
      </div>
    </div>
  );
};
