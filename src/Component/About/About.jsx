import React from 'react'
import "./About.css"
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src="https://img.freepik.com/premium-photo/vibrant-laptop-screen-graphics-dark-room-with-generative-ai_561855-7533.jpg?w=2000" alt="" className='about-img' />
     </div>
      <div className="about-right">
        <h3>ABOUT ME</h3>
        <h2>I am MERN Developer</h2>
        <p>  
         Hi! I'm <strong>Naina Bahuriya</strong>, a passionate web developer with a knack for building efficient, user-friendly, and visually appealing websites.
                    I specialize in front-end and back-end development, turning creative ideas into functional digital solutions.
        </p>
        <p>
              I strive to create websites and applications that not only meet user needs but also provide an exceptional experience.
              My goal is to leverage my technical expertise to make a meaningful impact.
        </p>
        <p>
              I started my journey as a curious learner who fell in love with coding. Over the years, I've honed my skills in technologies such as 
              HTML, CSS, JavaScript, React, Node.js, and more. I take pride in crafting applications that are fast, secure, and scalable.
        </p>
        
     </div>
    </div>
  )
}

export default About
