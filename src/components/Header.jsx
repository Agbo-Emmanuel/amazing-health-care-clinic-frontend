import React from 'react'
import './componentCss/header.css'
import ahc_logo from '../assets/ahc_logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {

    const navigate = useNavigate()

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
            </section>
        </main>
    </>
  )
}

export default Header