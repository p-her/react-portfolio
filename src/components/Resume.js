import React from 'react';
import resumeLink from '../assets/resume.pdf';


function Resume() {
  return (
    <div className='resume-page'>
        <div className='resume-header'>
            <h1>Resume</h1>
        </div>
      
        <div className='resume-download-link'>
            <a  href={resumeLink}  download="resume">Click to download resume</a>
        </div>

        <div className='resume-body'>
            <h2>Font-end Proficiencies</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>responsive design</p>
            <p>React</p>
            <p>Bootstrap</p>

        </div>

        <div className='resume-body'>
            <h2>Back-end Proficiencies</h2>
            <p>APIs</p>
            <p>GraphQL</p>
            <p> Node</p>
            <p>REST</p>
            <p>MySQL Sequelize</p>


        </div>
    
    </div>
  )
}

// /assets/resume/img.jpg
// /components/Resume.js

export default Resume