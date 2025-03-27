import React, { useState } from 'react'
import './componentCss/appointmentCard.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AppointmentCard = () => {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        // department: "",
        doctor: "",
        name: "",
        email: "",
        date: "",
        time: "",
    })

    const [loading, setLoading] = useState(false)

    function Writing (e){
        const {name, value} = e. target
        setValues({...values, [name]: value})
    }

    async function BookAppointment (e){
        e.preventDefault()
        try{
            setLoading(true)
            const response = await axios.post("https://amazing-health-care-clinic-backend.onrender.com/api/v1/send-mail-to-admin", values)
            setLoading(false)
            console.log(response)
            toast.success(response.data.success)
            setValues({
                // department: "",
                doctor: "",
                name: "",
                email: "",
                date: "",
                time: "",
            })

        }catch(error){
            setLoading(false)
            console.log(error)
            error.message == "Network Error" ? toast.error("Network error, Pls check your connection to the internet") : toast.error(error.response.data.error)
        }
    }

  return (
    <>
        <div className='appointment_card_body'>
            <div className='appointment_card_text_container'>
                <h3>Appointment</h3>
                <h1>Make An Appointment For Your Family</h1>
                <p>Schedule an appointment for your family with ease. Our dedicated medical professionals are committed to providing exceptional care tailored to your needs. Book now to ensure timely and comprehensive healthcare services.</p>
                <div className='appointment_card_btn_container'>
                    <button onClick={()=>navigate("/search")}>Find Doctor</button>
                    <button onClick={()=>navigate("/appointment")}>Read More</button>
                </div>
            </div>
            <form onSubmit={BookAppointment} className='appointment_card_form_container'>
                <h1>Book An Appointment</h1>
                <div className='appointment_card_form_input_container'>
                    {/* <select name='department' onChange={(e)=>Writing(e)}>
                        <option value="">Choose Department</option>
                        <option value="department 1">department 1</option>
                        <option value="department 2">department 2</option>
                        <option value="department 3">department 3</option>
                    </select> */}
                    <select name='doctor' onChange={(e)=>Writing(e)}>
                        <option value={values.doctor}>Select Doctor | optional</option>
                        <option value="Dr Yetunde Fasakin">Dr Yetunde Fasakin</option>
                        <option value="Dr Afolabi Fasakin">Dr Afolabi</option>
                        <option value="Dr Oyewole Favour">Dr Oyewole Favour</option>
                    </select>
                </div>
                <div className='appointment_card_form_input_container'>
                    <input
                        type='text'
                        placeholder='Your Name'
                        name='name'
                        value={values.name}
                        onChange={(e)=>Writing(e)}
                    />
                    <input
                        type='email'
                        placeholder='Your Email'
                        name='email'
                        value={values.email}
                        onChange={(e)=>Writing(e)}
                    />
                </div>
                <div className='appointment_card_form_input_container'>
                    <input
                        type='date'
                        placeholder='Date'
                        name='date'
                        value={values.date}
                        onChange={(e)=>Writing(e)}
                    />
                    <input
                        type='time'
                        placeholder='Time'
                        name='time'
                        value={values.time}
                        onChange={(e)=>Writing(e)}
                    />
                </div>
                <button type='submit'>{loading ? "loading..." : "Make An Appointment"}</button>
            </form>
        </div>
    </>
  )
}

export default AppointmentCard