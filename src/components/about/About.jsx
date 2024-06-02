import React from 'react'
import aboutimage from './../../images/about-us.jpg'
import './About.css'


function About() {
  return (
    <div name='about'>
      <img className='about-image' src={aboutimage} alt='/'/>
    </div>
  )
}

export default About
