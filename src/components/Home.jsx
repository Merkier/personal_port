import React from 'react';
import './Home.css';
import Portrait from './portrait2.png';

export default function Home() {
  return (
    <div className='home'>
      <div className='welcome'>
        
        <h1>HI MY NAME IS MERKIER...</h1>
        <h2>Frontend Developer based in Malmö</h2>
        <p>Let's create something amazing together!</p>

        <a href="mailto:your-email@example.com" className="button-link">
          Let’s talk
        </a>

      </div>
      <div className='portrait'>
        <img src={Portrait} alt="Merkier Portrait" />

      </div>
    </div>
  );
}
