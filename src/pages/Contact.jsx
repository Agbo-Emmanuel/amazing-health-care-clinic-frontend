import React from 'react'
import './pagesCss/contact.css'
import { FaLocationArrow, FaPhone, FaEnvelopeOpen } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <main className='contact_body'>
        <section className='contact_media_container'>
          <h3>ANY QUESTIONS?</h3>
          <h1>Please Feel Free To Contact Us</h1>
          <article className='contact_media_item_body'>
            <div className='contact_media_item_container'>
              <div className='contact_media_item_icon_container'><FaLocationArrow/></div>
              <p>123 Street, New York, USA</p>
            </div>
            <div className='contact_media_item_container'>
              <div className='contact_media_item_icon_container'><FaPhone/></div>
              <p>+012 345 6789</p>
            </div>
            <div className='contact_media_item_container'>
              <div className='contact_media_item_icon_container'><FaEnvelopeOpen/></div>
              <p>info@example.com</p>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Contact