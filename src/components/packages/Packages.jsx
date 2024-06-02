import React from 'react'
import './Packages.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import twentyguest from './../../images/packages/2g1.jpg'
import twohundredguest from './../../images/packages/200gp1.jpg'
import twentybabyshower from './../../images/packages/bs1.jpg'
import fiftyguestwedding from './../../images/packages/cwp1.jpg'
import fortyguestparty from './../../images/packages/gp1.jpg'
import twentyguestgrad from './../../images/packages/gr1.jpg'
import movienight from './../../images/packages/mn1.jpg'
import twentyguesttiffany from './../../images/packages/tp1.jpg'
import tablesetting from './../../images/packages/ts1.jpg'
import tiffwooden from './../../images/packages/tiffany_wooden.jpg'
import arch from './../../images/packages/balloon arch.jpg'

function Packages() {

  return (
    <div name='packages' className='container'>
        <div className='package-titles'>
        <h1 className="package-head">Packages</h1>
        <p className="package-desc">Here are some of the packages we offer:</p>
        </div>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={twentyguest} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={twohundredguest} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={twentybabyshower} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={fiftyguestwedding} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={fortyguestparty} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={twentyguestgrad} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={tablesetting} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={movienight} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={twentyguesttiffany} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={tiffwooden} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={arch} alt ='/'/>
            <p className="legend"></p>
        </div>
    </Carousel>
      
    </div>
  )
}

export default Packages
