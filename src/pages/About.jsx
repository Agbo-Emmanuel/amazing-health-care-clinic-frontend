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
        <FindADoctorCard/>
        <TeamCard/>
      </div>
    </>
  )
}

export default About