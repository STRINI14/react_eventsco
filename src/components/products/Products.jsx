import React from 'react'
import './Products.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import p1 from './../../images/products/p1.jpg'
import p2 from './../../images/products/p2.jpg'
import p3 from './../../images/products/p3.jpg'
import p4 from './../../images/products/p4.jpg'
import p5 from './../../images/products/p5.jpg'
import p6 from './../../images/products/p6.jpg'
import p7 from './../../images/products/p7.jpg'
import p8 from './../../images/products/p8.jpg'
import p9 from './../../images/products/p9.jpg'
import p10 from './../../images/products/p10.jpg'
import p11 from './../../images/products/p11.jpg'
import p12 from './../../images/products/p12.jpg'
import p13 from './../../images/products/p13.jpg'
import p14 from './../../images/products/p14.jpg'
import p15 from './../../images/products/p15.jpg'
import p16 from './../../images/products/p16.jpg'
import p17 from './../../images/products/p17.jpg'
import p18 from './../../images/products/p18.jpg'
import p19 from './../../images/products/p19.jpg'
import p20 from './../../images/products/p20.jpg'
import p21 from './../../images/products/p21.jpg'
import p22 from './../../images/products/p22.jpg'
import p23 from './../../images/products/p23.jpg'
import p24 from './../../images/products/p24.jpg'
import p25 from './../../images/products/p25.jpg'
import p26 from './../../images/products/p26.jpg'
import p27 from './../../images/products/p27.jpg'
import p28 from './../../images/products/p28.jpg'



function Products() {
  return (
    <div name="products" className='container'>
      <div className='product-titles'>
        <h1 className="product-head">Products</h1>
        <p className="product-desc">Here are some of the products that we have for hire:</p>
        </div>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={p1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={p2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={p3} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p4} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p5} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p6} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p7} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p8} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p9} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p10} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p11} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p12} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p13} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p14} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p15} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p16} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p17} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p18} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p19} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p20} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p21} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p22} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p23} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p24} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p25} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p26} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p27} alt ='/'/>
            <p className="legend"></p>
        </div>
        <div>
            <img src={p28} alt ='/'/>
            <p className="legend"></p>
        </div>
        
        
       
    </Carousel>
    </div>
  )
}

export default Products
