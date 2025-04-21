import React from 'react'
import { Link } from 'react-scroll';
import { useState ,useEffect} from 'react';
import "./Header.css"

const Header = () => {
  const [sticky ,setSticky ] = useState(false);
  useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 50 ? setSticky(true) :setSticky(false);
  })
  },[]);
  const [mobileMenu ,setMobilemenu]=useState(false)
  const toggleMenu=()=>{
    mobileMenu?setMobilemenu(false):setMobilemenu(true);
  }
  return (
    <div>
        <nav className={`Container  ${sticky? 'dark-nav' : ''}`}>
          <div className='bi bi-mortarboard-fill fs-1 logo '><span className=' fs-2 m-2 shadow-amber-300'>PROTFOLIO</span></div>       
          <ul className={mobileMenu?'':'hide-mobile-menu'}> 
            <li><Link to="home" smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to="project" smooth={true} offset={-260} duration={500}>Project</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About-us</Link></li>
            <li><Link to="skills" smooth={true} offset={-150} duration={500}>Skills</Link></li>
            <li className='mt-3 '><Link className='nav-btn text-decoration-none  btn btn-light' to="contact" smooth={true} offset={0} duration={500} >Contact</Link></li>
        </ul>
        <div className='menu-icon bi bi-list' onClick={toggleMenu}></div>
        </nav>
      
    </div>
  )
}

export default Header
