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
              <p>29 Adeshina street, Bariga, Lagos.</p>
            </div>
            <div className='contact_media_item_container'>
              <div className='contact_media_item_icon_container'><FaPhone/></div>
              <p>+234 201 291 1837</p>
            </div>
            <div className='contact_media_item_container'>
              <div className='contact_media_item_icon_container'><FaEnvelopeOpen/></div>
              <p>Amazinghealthcareclinic@gmail.com</p>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Contact