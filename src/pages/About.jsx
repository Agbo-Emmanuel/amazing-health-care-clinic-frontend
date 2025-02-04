import React from 'react'
import './pagesCss/about.css'
import AboutUsCard from '../components/AboutUsCard'
import FindADoctorCard from '../components/FindADoctorCard'
import TeamCard from '../components/TeamCard'

const About = () => {
  return (
    <>
      <div className='about_body'>
        <AboutUsCard/>
        <FindADoctorCard bg="#13C5DD" text="Easily find qualified healthcare professionals to meet your specific needs and receive the best care possible"/>
        <TeamCard/>
      </div>
    </>
  )
}

export default About