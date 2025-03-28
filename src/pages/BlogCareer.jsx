import React, { useEffect, useState } from 'react'
import './pagesCss/blogCareer.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const BlogCareer = () => {

  const navigate = useNavigate()

  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')) || null)

  useEffect(()=>{
    if (user == null){
      toast.error('You have to login before accessing the Blog')
      navigate('/login')
    }
  },[])

  return (
    <>
      <div className='blog_career_body'>

      </div>
    </>
  )
}

export default BlogCareer