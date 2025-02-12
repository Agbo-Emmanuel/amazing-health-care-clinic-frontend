import React, { useEffect, useState } from 'react'
import './pagesCss/home.css'
import AboutUsCard from '../components/AboutUsCard'
import ServiceCard from '../components/ServiceCard'
import AppointmentCard from '../components/AppointmentCard'
import TeamCard from '../components/TeamCard'
import FindADoctorCard from '../components/FindADoctorCard'
import { useNavigate } from 'react-router-dom'
import hero_image from '../assets/hero_image.png'
import hospital_image1 from '../assets/hospital_image1.jpg'
import hospital_image2 from '../assets/hospital_image2.jpg'
import hospital_image3 from '../assets/hospital_image3.jpg'
import hospital_image4 from '../assets/hospital_image4.jpg'
import hospital_image5 from '../assets/hospital_image5.jpg'
// import ahc_team_2_removebg from "../assets/ahc_team_2_removebg.png";

const Home = () => {

  const navigate = useNavigate()

  const images = [
    hospital_image1,
    hospital_image2,
    hospital_image3,
    hospital_image4,
    hospital_image5,
  ];

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentImage(current => (current + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  },[images.length])


  return (
    <>
      <main className='home_body'>
        <section className='hero_section' 
          style={{ 
            backgroundImage: `linear-gradient(to bottom, #0b2326, rgba(0, 0, 0, 0.7)), url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <article className='hero_section_text_container'>
            <h3>Welcome To Amazing Health care clinic</h3>
            <h1>Best Healthcare Solution In Your City</h1>
            <div className='hero_section_btn_container'>
              <button onClick={()=>navigate("/search")}>Find Doctor</button>
              <button onClick={()=>navigate("/appointment")}>Appointment</button>
            </div>
          </article>
          <article className='hero_section_image_container'>
            <img src={hero_image} alt='image'/>
          </article>
        </section>
        <AboutUsCard/>
        <ServiceCard limit = {6}/>
        <AppointmentCard/>
        <TeamCard/>
        <FindADoctorCard bg="#13C5DD" text="Easily find qualified healthcare professionals to meet your specific needs and receive the best care possible"/>
      </main>
    </>
  )
}

export default Home