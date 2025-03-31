import React, { useState } from 'react'
import './onboarding.css'
import ahc_logo from '../assets/ahc_logo.png'
import { LiaSpinnerSolid } from "react-icons/lia";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {

  const navigate = useNavigate()

  const [values, setValues] = useState({
    email : '',
    password : ''
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const inputChange = (e)=>{
    const {name, value} = e.target;
    setValues((prev)=>({
      ...prev,
      [name] : value
    }))
  }

  const registerUser = async (e)=>{
    e.preventDefault();
    if(!values.email){
      toast.error("email is required")
    }else if(!values.password){
      toast.error("password is required")
    }else{
      try{
        const url = 'https://amazing-health-care-clinic-backend.onrender.com/api/authRoute/login'
        const body = {email: values.email, password: values.password}
        setLoading(true)
        const response = await axios.post(url, body)
        setLoading(false)
        console.log(response)
        navigate("/")
        toast.success(response.data.message)
        localStorage.setItem('user',JSON.stringify(response.data.user))

      }catch(error){
        setLoading(false)
        console.log(error)
        error.message == "Network Error" ? toast.error("Network error, Pls check your connection to the internet") : toast.error(error.response.data.message)
      }
    }
  }

  return (
    <>
      <div className='onboarding_body'>
        <form onSubmit={registerUser} className='onboarding_form'>
          <div className='onboarding_logo' onClick={()=>navigate('/')}>
            <img src={ahc_logo} alt='logo'/>
            <h1>AHC</h1>
          </div>
          <div className='onboarding_input_container'>
            <label>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              value={values.email}
              onChange={(e)=>inputChange(e)}
            />
          </div>
          <div className='onboarding_input_container'>
            <label>Password</label>
            <div className='onboarding_password_container'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Enter your password'
                name='password'
                value={values.password}
                onChange={(e)=>inputChange(e)}
              />
              {
                showPassword ? 
                <IoEyeOff className="password_logo" onClick={()=>setShowPassword(false)}/> : 
                <IoEye className="password_logo" onClick={()=>setShowPassword(true)}/>
              }
            </div>
          </div>
          <button type='submit'>{loading ? <LiaSpinnerSolid className='spinner'/> : "Login"}</button>
          <div className='onboarding_navigate_container'>
            <p>Don't have an account?<span onClick={()=>navigate('/register')}>Register</span></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login