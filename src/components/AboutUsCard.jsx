import React from 'react'
import './componentCss/aboutUsCard.css'
import { FaUserDoctor } from "react-icons/fa6";
import { FaProcedures } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import about_image from "../assets/about_img.jpg";

const AboutUsCard = () => {
  return (
    <>
        <div className='about_us_card_body'>
            <div className='about_us_card_image_container'>
                <img src={about_image} alt='image'/>
            </div>
            <div className='about_us_card_text_container'>
                <h3>ABOUT US</h3>
                <h1>Best Medical Care For Yourself and Your Family</h1>
                <p>Our hospital is committed to delivering world-class medical care with a focus on excellence, 
                    innovation, and patient-centered services. Backed by a team of highly skilled professionals and advanced technology, 
                    we strive to provide comprehensive healthcare solutions for you and your family Qualified Doctors
                </p>
                <div className='about_us_card_service_container'>
                    <div className='about_us_card_service'>
                        <FaUserDoctor size={46} color='#13C5DD'/>
                        <h6>Qualified <small>Doctor</small></h6>
                    </div>
                    <div className='about_us_card_service'>
                        <FaProcedures size={46} color='#13C5DD'/>
                        <h6>Emergency <small>Services</small></h6>
                    </div>
                    <div className='about_us_card_service'>
                        <FaMicroscope size={46} color='#13C5DD'/>
                        <h6>Accurate <small>Testing</small></h6>
                    </div>
                    <div className='about_us_card_service'>
                        <FaHandsHelping size={46} color='#13C5DD'/>
                        <h6>Occupational <small>Therapy</small></h6>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUsCard