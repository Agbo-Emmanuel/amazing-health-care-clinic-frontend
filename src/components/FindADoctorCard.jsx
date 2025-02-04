import React from 'react'
import './componentCss/findDoctorCard.css'

const FindADoctorCard = ({bg, text, color, pColor}) => {
  return (
    <>
        <div className='find_doctor_body' style={{backgroundColor: bg}}>
          <h3 style={{color: color}}>Find A Doctor</h3>
          <h1>Find A Healthcare Professionals</h1>
          <p style={{color: pColor}}>{text}</p>
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