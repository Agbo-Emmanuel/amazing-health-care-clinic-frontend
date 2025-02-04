import React, { useState } from 'react'
import './componentCss/header.css'
import ahc_logo from '../assets/ahc_logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Header = () => {

    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)

  return (
    <>
        <main className='header_body'>
            <section className='header_top'>
                <article className='header_contact_info_container'>
                    <p><BsTelephone/> +012 345 6789</p>
                    <p>|</p>
                    <p><BsEnvelope/>info@example.com</p>
                </article>
                <article className='header_contact_media_link_container'>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                    <FaInstagram/>
                    <FaYoutube />
                </article>
            </section>
            <section className='header_bottom'>
                <article className='header_bottom_logo_container' onClick={()=>navigate("/")}>
                    <img src={ahc_logo} alt='image'/>
                    <h1>AHC</h1>
                </article>
                <article className='header_bottom_link_container'>
                    <NavLink to="/" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Home</NavLink>
                    <NavLink to="/about" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>About</NavLink>
                    <NavLink to="/service" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Service</NavLink>
                    <NavLink to="/appointment" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Appointment</NavLink>
                    <NavLink to="/pages" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Pages <MdArrowDropDown/></NavLink>
                    <NavLink to="/contact" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Contact</NavLink>
                </article>
                {
                    showMenu ? 
                        <div className='bugger_menu_container' onClick={()=>setShowMenu(false)}><IoClose/></div>
                    :   <div className='bugger_menu_container' onClick={()=>setShowMenu(true)}><MdMenu/></div>
                }
                {
                    showMenu ? 
                        <article className='mobile_menu_link_container'>
                            <NavLink to="/" className={({isActive})=> isActive ? "mobileMenuActive" : "mobileMenuNotActive"}>Home</NavLink>
                            <NavLink to="/about" className={({isActive})=> isActive ? "mobileMenuActive" : "mobileMenuNotActive"}>About</NavLink>
                            <NavLink to="/service" className={({isActive})=> isActive ? "mobileMenuActive" : "mobileMenuNotActive"}>Service</NavLink>
                            <NavLink to="/appointment" className={({isActive})=> isActive ? "mobileMenuActive" : "mobileMenuNotActive"}>Appointment</NavLink>
                            <NavLink to="/contact" className={({isActive})=> isActive ? "mobileMenuActive" : "mobileMenuNotActive"}>Contact</NavLink>
                        </article>
                    : null
                }
            </section>
        </main>
    </>
  )
}

export default Header