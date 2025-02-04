import React from 'react'
import './pagesCss/search.css'
import FindADoctorCard from '../components/FindADoctorCard'

const Search = () => {
  return (
    <>
        <div className='search_body'>
            <FindADoctorCard 
                bg="#fff" 
                text="Our platform connects you with highly qualified healthcare professionals dedicated to providing the best care for you and your family. Whether you need a specialist, a general practitioner, or expert medical advice, we make it easy to find the right professional to meet your needs."
                color="#13C5DD"
                pColor="#1D2A4D"
                />
        </div>
    </>
  )
}

export default Search