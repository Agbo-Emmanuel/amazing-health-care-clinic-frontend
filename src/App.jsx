import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import AppointmentCard from './components/AppointmentCard'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TheTeam from './pages/TheTeam'
import Search from './pages/Search'
import ScrollToTop from './ScrollToTop'
import BlogCareer from './pages/BlogCareer'
import Register from './onboarding/Register'
import Login from './onboarding/Login'
import NotifyPage from './components/NotifyPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/notification' element = {<NotifyPage/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route element = {<Landing/>}>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/service' element = {<Service/>}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path='/appointment' element = {<AppointmentCard/>}/>
            <Route path='/the-team' element = {<TheTeam/>}/>
            <Route path='/search' element = {<Search/>}/>
            <Route path='/blog-career' element = {<BlogCareer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App