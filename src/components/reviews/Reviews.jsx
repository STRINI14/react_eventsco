import React from 'react'
import './Reviews.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import review1 from './../../images/reviews/review1.jpg'
import review2 from './../../images/reviews/review2.jpg'
import review3 from './../../images/reviews/review3.jpg'
import review4 from './../../images/reviews/review4.jpg'
import review5 from './../../images/reviews/review5.jpg'


function Reviews() {
  return (
    <div name="reviews" className='container'>
      <div className='reviews-titles'>
            <h1 className="reviews-head">Reviews</h1>
            <p className="reviews-desc">Here's what our clients say about our services:</p>
    </div>
        <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={review1} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={review2} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={review3} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={review4} alt ='/' />
            <p className="legend"></p>
        </div>
        <div>
            <img src={review5} alt ='/' />
            <p className="legend"></p>
        </div>
        </Carousel>
    </div>
  )
}

export default Reviews
