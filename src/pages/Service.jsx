import React from 'react'
import './pagesCss/service.css'
import ServiceCard from '../components/ServiceCard'
import AppointmentCard from '../components/AppointmentCard'

const Service = () => {
  return (
    <>
      <div className='service_body'>
        <ServiceCard/>
        <AppointmentCard/>
      </div>
    </>
  )
}

export default Service