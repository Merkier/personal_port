import React from 'react';
import './About.css';
import AboutImage from './aboutimage.png';

export default function About() {
  return (
    <div className="about">
      <div className="aboutMe">
        <h2>About Merkier</h2>
        <div className="aboutContent">
          <p>
            Lorem ipsum <span className="highlight">dolor sit amet</span>, consectetur adipiscing elit.
            Pellentesque non arcu <span className="highlight">nulla</span>. Fusce ut orci vitae lorem pellentesque dapibus.
            Quisque feugiat, erat nec <span className="highlight">laoreet sagittis</span>, arcu ligula bibendum magna,
            in dictum magna nunc non purus.
          </p>
          <p>
          <img src={AboutImage} alt="About Me Portrait" className="aboutPortrait" />
            Vivamus vel <span className="highlight">dui</span> in nunc aliquet fermentum. Sed sit amet cursus magna.
            Integer id massa et nisi <span className="highlight">gravida tincidunt</span>.
            Proin sed faucibus <span className="highlight">mi</span>.
            Ut tincidunt, risus ut malesuada <span className="highlight">faucibus</span>, eros arcu pharetra libero,
            a pharetra risus velit ac <span className="highlight">nulla</span>.
          </p>

          <p>
            Curabitur congue erat eget <span className="highlight">eros</span> pellentesque pharetra.
            Duis at nunc volutpat, <span className="highlight">interdum nisl</span> ac, pulvinar libero.
            Proin lacinia orci sed feugiat convallis.
            Nullam dignissim, purus sed pellentesque <span className="highlight">tristique</span>,
            ex nunc varius est, eget tincidunt nisi orci id risus.
          </p>
        </div>
      </div>

      <div className="workHistory">
        <h2>Work History</h2>
        <div className="workItem">
          <h4>Front-End Developer at TechNova</h4>
          <p>Built responsive web applications using React and TypeScript. Collaborated with UI/UX designers to create engaging user interfaces.</p>
        </div>
        <div className="divider" />
        <div className="workItem">
          <h4>UI Developer at CodeCraft</h4>
          <p>Developed and maintained component libraries in React. Focused on optimizing performance and accessibility for web platforms.</p>
        </div>
        <div className="divider" />
        <div className="workItem">
          <h4>Junior Front-End Engineer at PixelLogic</h4>
          <p>Worked on cross-browser compatibility and debugging. Assisted in migrating legacy codebases to modern frameworks.</p>
        </div>
      </div>
    </div>
  );
}
