import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import Logo from './../../images/Logo.png'
import './Navbar.css'
import {FaFacebook, FaWhatsapp, FaPhone} from 'react-icons/fa'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    
    return (
      <div id='home' className={nav ? "navbar navbar-bg" : "navbar"}>
        <div className={nav ? "logo dark" : "logo"}>
            <a href='home'><img src={Logo} alt="/" style={{width: '55px', paddingLeft:'2px'}}/></a>
        </div>
        
        <ul className="nav-menu">
          <Link to ='hero' smooth={true} duration={500}><li>Home</li></Link>
          <Link to ='about' smooth={true} duration={500}><li>About</li></Link>
          <Link to ='packages' smooth={true} duration={500}><li>Packages</li></Link>
          <Link to ='products' smooth={true} duration={500}><li>Products</li></Link>
          <Link to ='services' smooth={true} duration={500}><li>Services</li></Link>
          <Link to ='reviews' smooth={true} duration={500}><li>Reviews</li></Link>
          <Link to ='contact' smooth={true} duration={500}><li>Contact Us</li></Link>
        </ul>
      
      <div className="hamburger" onClick={handleNav} >
          {!nav ? (< HiOutlineMenuAlt3 className='icon'/>) : (< AiOutlineClose style= {{color: 'white'}}className="icon"/>) }
          
      </div>
  
      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <ul className="mobile-nav">
          <Link onClick={handleNav}  to='hero' smooth={true} duration={500}><li>Home</li></Link>
          <Link onClick={handleNav}  to='about' smooth={true} duration={500}><li>About</li></Link>
          <Link onClick={handleNav}  to='packages' smooth={true} duration={500}><li>Packages</li></Link>
          <Link onClick={handleNav}  to='products' smooth={true} duration={500}><li>Products</li></Link>
          <Link onClick={handleNav}  to='services' smooth={true} duration={500}><li>Services</li></Link>
          <Link onClick={handleNav}  to='reviews' smooth={true} duration={500}><li>Reviews</li></Link>
          <Link onClick={handleNav}  to='contact' smooth={true} duration={500}><li>Contact Us</li></Link>
          </ul>
      <div className="mobile-menu-bottom">
          
          <div className="social-icons">
            <a className="facebook" target='blank' href="https://www.facebook.com/EventsCoSA"><FaFacebook/></a>
            <a className="whatsapp" target='blank' href="https://wa.me/c/27679046544"><FaWhatsapp/></a>
            <a className="email" target='blank' href="mailto:info@eventscosa.co.za"><AiOutlineMail/></a>
            <a className="phone" href="tel:067 904 6544">< FaPhone/></a>
        </div>
      </div>
       
      </div>
  
      </div>
    )
  }
  
  export default Navbar
