import { Avatar } from '@mui/material'
import React from 'react';
import img from '../assets/avatar.png';



function About() {
  return (
     <section className='about-me'>
         <div className='avatar-icon'>
            <Avatar
                alt="Pao Her"
                src={img}
                sx={{ width: 150, height: 150 }}
            />
         </div>

         <div className='about-me-header'>
             <h1>About Me</h1>
         </div>

         <div className='about-me-body'>
            <p>
                My name is Pao Her. I worked at Target's Distribution Center in Minnesota.
                I am currently enrolled in Michigan State University for their online bootcamp for full-stack
                developer. In the bootcamp,  I was taught about the MERN stack. I have learned about MongoDB, Express, Node, and lastly
                learning about React. Once, I finished with React, then I am going to start a project that
                will include all of the four technologies of the stack in my project.
            </p>
         </div>
     </section>
   
  )
}

export default About