import React from 'react'
import './componentCss/serviceCard.css'
import { FaUserDoctor } from "react-icons/fa6";

const ServiceCard = ({limit}) => {

    const services = [
        {
            id : 1,
            icon : <FaUserDoctor/>,
            service : "Outpatient Clinics",
            description : "Our outpatient clinics provide expert psychiatric care in a comfortable and confidential setting. Our clinics are open from Monday to Friday, 8am-5pm, and offer walk-in and scheduled appointments for your convenience.",
        },
        {
            id : 2,
            icon : <FaUserDoctor/>,
            service : "Visiting Hours",
            description : "We believe in the importance of family and friends in the recovery process. Our visiting hours are from 4pm-6pm on weekdays and 10am-6pm on weekends.",
        },
        {
            id : 3,
            icon : <FaUserDoctor/>,
            service : "Drug Rehabilitation",
            description : "Overcome addiction with our comprehensive rehabilitation programs.",
        },
        {
            id : 4,
            icon : <FaUserDoctor/>,
            service : "Home Services",
            description : "Receive psychiatric care in the comfort of your own home. Our home services team is dedicated to supporting your mental health journey.",
        },
        {
            id : 5,
            icon : <FaUserDoctor/>,
            service : "Educational Programs",
            description : "Empower yourself with knowledge through our educational programs. We offer classes and workshops on topics such as stress management, coping skills, and operational therapy.",
        },
        {
            id : 6,
            icon : <FaUserDoctor/>,
            service : "General and Private Wards",
            description : "Choose from our comfortable general and private wards, designed to support your recovery and well-being.",
        },
        {
            id : 7,
            icon : <FaUserDoctor/>,
            service : "Occupational Therapy",
            description : "Occupational therapy helps patients develop essential life skills. Our OT team works with patients to identify areas of difficulty and create personalized plans to improve skills such as bathing, dressing, cooking, and managing finances.",
        },
        {
            id : 8,
            icon : <FaUserDoctor/>,
            service : "Speech Therapy",
            description : "Speech therapy is a type of treatment that focuses on helping patients improve their communication skills. Our speech therapists work with patients to address issues such as speech disorders, language difficulties, and swallowing problems.",
        },
        {
            id : 9,
            icon : <FaUserDoctor/>,
            service : "Family Therapy",
            description : "Family therapy strengthens relationships and promotes healthy communication. Our family therapists work with families to identify and address issues that may be contributing to mental health concerns.",
        },
        {
            id : 10,
            icon : <FaUserDoctor/>,
            service : "Child Psychiatry",
            description : "Our child psychiatry team provides specialized care for young minds. We offer comprehensive diagnostic evaluations and treatment plans tailored to each child's unique needs.",
        },
        {
            id : 11,
            icon : <FaUserDoctor/>,
            service : "Diagnostic Services",
            description : "Our diagnostic services include: - ECG (Electrocardiogram): A non-invasive test that measures the electrical activity of the heart - EEG (Electroencephalogram): A non-invasive test that measures the electrical activity of the brain - MMPI (Minnesota Multiphasic Personality Inventory): A psychological test used to assess personality traits and psychopathology",
        },
        {
            id : 12,
            icon : <FaUserDoctor/>,
            service : "Recreation Center and Gym",
            description : "Stay active and engaged with our state-of-the-art recreation center and gym! Our facilities include: - Fully equipped gym for physical exercise and wellness - Table tennis and other indoor games for socialization and fun - Board games like Scrabble, Ludo, and cards for mental stimulation - Traditional Yoruba games like Ayo (seed game) for cultural connection",
        },
        {
            id : 13,
            icon : <FaUserDoctor/>,
            service : "Amenities",
            description : "Enjoy our hospital amenities, including: - 24/7 electricity and lighting - Clean and comfortable living spaces - Nutritious meals and snacks - Access to recreational activities and therapy sessions",
        },
    ]


    const serviceToDisplay = limit ? services.slice(0,limit) : services;

  return (
    <>
        <div className='service_card_body'>
            <div className='service_card_body_top'>
                <h3>SERVICES</h3>
                <h1>Excellent Medical Services</h1>
            </div>
            <div className='service_card_body_bottom'>
                {
                    serviceToDisplay.map((e)=>(
                        <div key={e.id} className='service_card_container'>
                            <div className='service_card_icon_container'>
                                {e.icon}
                            </div>
                            <h4>{e.service}</h4>
                            <p>{e.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default ServiceCard