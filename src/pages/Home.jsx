import React from 'react'
import './pagesCss/home.css'
import AboutUsCard from '../components/AboutUsCard'
import ServiceCard from '../components/ServiceCard'
import AppointmentCard from '../components/AppointmentCard'
import TeamCard from '../components/TeamCard'
import FindADoctorCard from '../components/FindADoctorCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='home_body'>
        <section className='hero_section'>
          <article className='hero_section_text_container'>
            <h3>Welcome To Amazing Health care clinic</h3>
            <h1>Best Healthcare Solution In Your City</h1>
            <div className='hero_section_btn_container'>
              <button onClick={()=>navigate("/")}>Find Doctor</button>
              <button onClick={()=>navigate("/appointment")}>Appointment</button>
            </div>
          </article>
        </section>
        <AboutUsCard/>
        <ServiceCard limit = {6}/>
        <AppointmentCard/>
        <TeamCard/>
        <FindADoctorCard/>
      </main>
    </>
  )
}

export default Home