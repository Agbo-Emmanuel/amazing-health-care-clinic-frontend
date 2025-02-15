import React from 'react'
import './pagesCss/about.css'
import AboutUsCard from '../components/AboutUsCard'
import FindADoctorCard from '../components/FindADoctorCard'
import TeamCard from '../components/TeamCard'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='about_body'>
        <AboutUsCard/>
        <FindADoctorCard bg="#13C5DD" text="Easily find qualified healthcare professionals to meet your specific needs and receive the best care possible"/>
        <div className='about_team_container'>
          <TeamCard limit={2}/>
          <button className='view_all_btn' onClick={()=>navigate("/the-team")}>View all</button>
        </div>
      </div>
    </>
  )
}

export default About