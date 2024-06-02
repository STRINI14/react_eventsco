import React from 'react'
import './Home.css'
import Video from '../../images/Event.mp4'

function Home() {
  return (
    <div name='home'>
        <div className="hero">
       <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4'/>
        </video>
        </div>
    </div>
  )
}

export default Home
