import React from 'react'
import './componentCss/teamCard.css'
import ahc_team_1 from "../assets/ahc_team_1.jpg";
import ahc_team_2 from "../assets/ahc_team_2.jpg";
import ahc_team_3 from "../assets/ahc_team_3.jpg";

const TeamCard = ({limit}) => {

    const team = [
        {
            name: "Dr Yetunde Fasakin",
            type: "Cardiology Specialist",
            image: ahc_team_2,
            desc: "Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor",
        },
        {
            name: "Dr Afolabi Fasakin",
            type: "Cardiology Specialist",
            image: ahc_team_1,
            desc: "Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor",
        },
        {
            name: "Dr Oyewole Favour",
            type: "Medical officer/Resident doctor",
            image: ahc_team_3,
            desc: "As a resident doctor, my days are filled with a mix of excitement, challenge, and reward. I'm constantly learning and growing, both as a medical professional and as a person. I've had the opportunity to work with experienced physicians and learn from them. I've developed my skills and knowledge, and I've become a more confident and competent doctor.",
        },
    ]

    const teamToDisplay = limit ? team.slice(0,limit) : team;

  return (
    <>
        <div className='team_card_body'>
            <div className='team_card_body_top'>
                <h3>Our Doctors</h3>
                <h1>Qualified Healthcare Professionals</h1>
            </div>
            <div className='team_card_body_bottom'>
                {
                    teamToDisplay.map((e)=>(
                        <div className='team_card'>
                            <div className='team_card_img'>
                                <img src={e.image} alt='image'/>
                            </div>
                            <div className='team_card_text_container'>
                                <h3>{e.name} <br/><small>{e.type}</small></h3>
                                <p>{e.desc}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    </>
  )
}

export default TeamCard