import React from 'react'
import './componentCss/footer.css'
import { FaLocationDot, FaPhone, FaInstagram } from "react-icons/fa6";
import { IoMdMail, IoIosArrowForward } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <main className='footer_body'>
        <section className='footer_top'>
          <article className='footer_info_container'>
            <h2>GET IN TOUCH</h2>
            <p>We’re here to help! Reach out to us for any inquiries, assistance, or support. Our team is ready to connect and provide the best solutions tailored to your needs.</p>
            <div className='footer_get_in_touch_media_container'>
              <div className='footer_get_in_touch_media'>
                <FaLocationDot size={16} color='#13C5DD'/>
                <p>123 Street, New York, USA</p>
              </div>
              <div className='footer_get_in_touch_media'>
                <IoMdMail size={16} color='#13C5DD'/>
                <p>info@example.com</p>
              </div>
              <div className='footer_get_in_touch_media'>
                <FaPhone size={16} color='#13C5DD'/>
                <p>+012 345 67890</p>
              </div>
            </div>
          </article>
          <article className='footer_info_container'>
            <h2>Quick Links</h2>
            <div className='footer_nav_link_container'>
              <a href='/'>
                <IoIosArrowForward/>
                Home
              </a>
              <a href='/about'>
                <IoIosArrowForward/>
                About Us
              </a>
              <a href='/service'>
                <IoIosArrowForward/>
                Our Services
              </a>
              <a href='/'>
                <IoIosArrowForward/>
                Meet The Team
              </a>
              <a href='/contact'>
                <IoIosArrowForward/>
                Contact Us
              </a>
            </div>
          </article>
          <article className='footer_info_container'>
            <h2>Popular Links</h2>
            <div className='footer_nav_link_container'>
              <a href='/'>
                <IoIosArrowForward/>
                Home
              </a>
              <a href='/about'>
                <IoIosArrowForward/>
                About Us
              </a>
              <a href='/service'>
                <IoIosArrowForward/>
                Our Services
              </a>
              <a href='/'>
                <IoIosArrowForward/>
                Meet The Team
              </a>
              <a href='/contact'>
                <IoIosArrowForward/>
                Contact Us
              </a>
            </div>
          </article>
          <article className='footer_info_container'>
            <h2>FOLLOW US</h2>
            <div className='footer_media_link_container'>
              <div className='footer_media_icon'>
                <FaTwitter/>
              </div>
              <div className='footer_media_icon'>
                <FaFacebookF/>
              </div>
              <div className='footer_media_icon'>
                <FaLinkedinIn/>
              </div>
              <div className='footer_media_icon'>
                <FaInstagram />
              </div>
            </div>
          </article>
        </section>
        <section className='footer_bottom'>
          <p>© <span>amazing health care clinic</span>. All Rights Reserved.</p>
        </section>
      </main>
    </>
  )
}

export default Footer