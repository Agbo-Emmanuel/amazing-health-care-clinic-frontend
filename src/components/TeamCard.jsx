import React from 'react'
import './componentCss/teamCard.css'
import ahc_team_1 from "../assets/ahc_team_1.jpg";
import ahc_team_2 from "../assets/ahc_team_2.jpg";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const TeamCard = () => {
  return (
    <>
        <div className='team_card_body'>
            <div className='team_card_body_top'>
                <h3>Our Doctors</h3>
                <h1>Qualified Healthcare Professionals</h1>
            </div>
            <div className='team_card_body_bottom'>
                <div className='team_card'>
                    <div className='team_card_img'>
                        <img src={ahc_team_1} alt='image'/>
                    </div>
                    <div className='team_card_text_container'>
                        <h3>Dr Fasakin Abiola <br/><small>Cardiology Specialist</small></h3>
                        <p>Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                        {/* <div className='team_card_media_link_container'>
                            <div className='team_card_media_icon'>
                                <FaTwitter/>
                            </div>
                            <div className='team_card_media_icon'>
                                <FaFacebookF/>
                            </div>
                            <div className='team_card_media_icon'>
                                <FaLinkedinIn/>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='team_card'>
                    <div className='team_card_img'>
                        <img src={ahc_team_2} alt='image'/>
                    </div>
                    <div className='team_card_text_container'>
                        <h3>Dr Yetunde Fasakin <br/><small>Cardiology Specialist</small></h3>
                        <p>Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                        {/* <div className='team_card_media_link_container'>
                            <div className='team_card_media_icon'>
                                <FaTwitter/>
                            </div>
                            <div className='team_card_media_icon'>
                                <FaFacebookF/>
                            </div>
                            <div className='team_card_media_icon'>
                                <FaLinkedinIn/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TeamCard