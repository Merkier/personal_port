import React, { useState } from 'react';
import jobs from './jobs.json';
import './Works.css'

export default function Works() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="services">
      <h2>Works</h2>
      {jobs.map((job) => (
        <div key={job.id} className="serviceItem">
          <div className="serviceInfo">
            <div className="serviceHeader">
              <h4>{job.title}</h4>
              <p>{job.description}</p>
              <button onClick={() => toggleExpand(job.id)}>
                Read {expanded === job.id ? 'Less' : 'More'}
              </button>
            </div>
            {expanded === job.id && (
              <div className="serviceExpand">
                                <img src={job.image} alt={job.title} />
                <p>{job.details}</p>

              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
