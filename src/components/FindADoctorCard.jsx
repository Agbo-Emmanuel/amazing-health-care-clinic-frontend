import React from 'react'
import './componentCss/findDoctorCard.css'

const FindADoctorCard = () => {
  return (
    <>
        <div className='find_doctor_body'>
          <h3>Find A Doctor</h3>
          <h1>Find A Healthcare Professionals</h1>
          <p>Easily find qualified healthcare professionals to meet your specific needs and receive the best care possible</p>
          <form className='find_doctor_section_form_container'>
            <select>
              <option>Department</option>
              <option>Department 1</option>
              <option>Department 2</option>
              <option>Department 3</option>
            </select>
            <input
              type='text'
              placeholder='Keyword'
            />
            <button>Search</button>
          </form>
        </div>
    </>
  )
}

export default FindADoctorCard