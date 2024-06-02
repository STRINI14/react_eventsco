import React from 'react'
import './Services.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bs1 from './../../images/services/Baby Shower/bs1.jpg'
import bs2 from './../../images/services/Baby Shower/bs2.jpg'
import bs3 from './../../images/services/Baby Shower/bs3.jpg'
import bs4 from './../../images/services/Baby Shower/bs4.jpg'
import bs5 from './../../images/services/Baby Shower/bs5.jpg'
import bs6 from './../../images/services/Baby Shower/bs6.jpg'
import bs7 from './../../images/services/Baby Shower/bs7.jpg'
import bs8 from './../../images/services/Baby Shower/bs8.jpg'
import bs9 from './../../images/services/Baby Shower/bs9.jpg'
import bs10 from './../../images/services/Baby Shower/bs10.jpg'
import bs11 from './../../images/services/Baby Shower/bs11.jpg'

import ba1 from './../../images/services/Balloon Arch/ba1.jpg'
import ba2 from './../../images/services/Balloon Arch/ba2.jpg'
import ba3 from './../../images/services/Balloon Arch/ba3.jpg'
import ba4 from './../../images/services/Balloon Arch/ba4.jpg'
import ba5 from './../../images/services/Balloon Arch/ba5.jpg'
import ba6 from './../../images/services/Balloon Arch/ba6.jpg'
import ba7 from './../../images/services/Balloon Arch/ba7.jpg'
import ba8 from './../../images/services/Balloon Arch/ba8.jpg'
import ba9 from './../../images/services/Balloon Arch/ba9.jpg'
import ba10 from './../../images/services/Balloon Arch/ba10.jpg'

import bp1 from './../../images/services/Birthday Party/bp1.jpg'
import bp2 from './../../images/services/Birthday Party/bp2.jpg'
import bp3 from './../../images/services/Birthday Party/bp3.jpg'
import bp4 from './../../images/services/Birthday Party/bp4.jpg'
import bp5 from './../../images/services/Birthday Party/bp5.jpg'
import bp6 from './../../images/services/Birthday Party/bp6.jpg'

import br01 from './../../images/services/Bridal Shower/br01.jpg'
import br1 from './../../images/services/Bridal Shower/br1.jpg'
import br2 from './../../images/services/Bridal Shower/br2.jpg'
import br3 from './../../images/services/Bridal Shower/br3.jpg'

import gr4 from './../../images/services/Graduation/gr4.jpg'
import gr5 from './../../images/services/Graduation/gr5.jpg'
import gr6 from './../../images/services/Graduation/gr6.jpg'
import gr7 from './../../images/services/Graduation/gr7.jpg'

import mn1 from './../../images/services/Movie Night/mn1.jpg'
import mn2 from './../../images/services/Movie Night/mn2.jpg'
import mn3 from './../../images/services/Movie Night/mn3.jpg'

import st1 from './../../images/services/Stretch Tent/st1.jpg'
import st2 from './../../images/services/Stretch Tent/st2.jpg'
import st3 from './../../images/services/Stretch Tent/st3.jpg'
import st4 from './../../images/services/Stretch Tent/st4.jpg'

import cwp5 from './../../images/services/Wedding/cwp5.jpg'
import cwp6 from './../../images/services/Wedding/cwp6.jpg'
import cwp7 from './../../images/services/Wedding/cwp7.jpg'
import cwp8 from './../../images/services/Wedding/cwp8.jpg'

import Wr1 from './../../images/services/Wedding Reception/Wr1.jpg'
import Wr2 from './../../images/services/Wedding Reception/Wr2.jpg'
import wr3 from './../../images/services/Wedding Reception/wr3.jpg'
import wr4 from './../../images/services/Wedding Reception/wr4.jpg'
import wr5 from './../../images/services/Wedding Reception/wr5.jpg'
import wr6 from './../../images/services/Wedding Reception/wr6.jpg'
import wr7 from './../../images/services/Wedding Reception/wr7.jpg'
import wr8 from './../../images/services/Wedding Reception/wr8.jpg'

function Services() {
  return (
    <div name="services" className='container'>
        <div className='services-titles'>
            <h1 className="services-head">Services</h1>
            <p className="services-desc">Here are some of the services that we offer:</p>
        </div>

        <h1 className='baby-desc'>Baby Shower</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={bs1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs3} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs4} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs5} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs6} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs7} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs8} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs9} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs10} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bs11} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>

        <h1 className='event-desc'>Balloon Arch</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={ba1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba3} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba4} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba5} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba6} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba7} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba8} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba9} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={ba10} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>

        <h1 className='event-desc'>Birthday Party</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={bp1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bp2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bp3} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bp4} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bp5} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={bp6} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>

        <h1 className='event-desc'>Bridal Shower</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={br01} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={br1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={br2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={br3} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>

        <h1 className='event-desc'>Graduation</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={gr4} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={gr5} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={gr6} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={gr7} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>

        <h1 className='event-desc'>Movie Night</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={mn1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={mn2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={mn3} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>

        <h1 className='event-desc'>Stretch Tent</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={st1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={st2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={st3} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={st4} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>

        <h1 className='event-desc'>Wedding</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={cwp5} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={cwp6} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={cwp7} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={cwp8} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>

        <h1 className='event-desc'>Wedding Reception</h1>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={Wr1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={Wr2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={wr3} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={wr4} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={wr5} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={wr6} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={wr7} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={wr8} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>


    </div>
  )
}

export default Services
