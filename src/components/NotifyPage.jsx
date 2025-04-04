import React from 'react'
import "./componentCss/notifypage.css";
import ahc_logo from '../assets/ahc_logo.png'

const NotifyPage = () => {
  return (
   <>
   
    <div className='notify_page_body'>
      <div className='notify_page_container'>
        <div className='notify_page_logo_container'>
          <img src={ahc_logo} alt='img'/>
        </div>
        <h3>Congratulations!!!</h3>
        <p>Your account has been successfully created.</p>
        <p>
          Please check your email inbox or your junk folder for a message from us with instructions on how to verify your account.
        </p>
      </div>
    </div>
   
   </>
  )
}

export default NotifyPage