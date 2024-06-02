import React from 'react'
import './Contact.css'
import {FaFacebook, FaWhatsapp, FaPhone} from 'react-icons/fa'
import {AiOutlineMail } from 'react-icons/ai'

function Contact()  {
   
  return (
   
    <div name="contact" className='container'>
      <div className='contact-titles'>
        <h1 className="contact-head">Get In Touch!</h1>
       <p className="contact-desc">Contact us to make your next event special</p>
    </div>
    
     <div className="social-icons"> <br/>
            <a className="facebook" target='blank' href="https://www.facebook.com/EventsCoSA"><FaFacebook/> EventsCo SA</a> <br/>
          
      </div> 

      <div className="social-icons"> <br/>
            <a className="whatsapp" target='blank' href="https://wa.me/c/27679046544"><FaWhatsapp/> 067 904 6544</a><br/>
      </div> 

      <div className="social-icons"> <br/>        
            <a className="email" target='blank' href="mailto:info@eventscosa.co.za"><AiOutlineMail/> info@eventscosa.co.za</a> <br/>
      </div> 

      <div className="social-icons"> <br/>     
            <a className="phone" href="tel:067 904 6544">< FaPhone/> 067 904 6544</a>
      </div> 
    </div>
  )
}
  export default Contact





