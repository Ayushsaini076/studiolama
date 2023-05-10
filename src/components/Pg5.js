import React from 'react'
import image from '../Assets/lastimg.png'
import './Pg5.css'
import bag from '../Assets/scheduled.png'
import clock from '../Assets/time.png'
import call from '../Assets/called.png'
import link from '../Assets/Link.png'
import person from '../Assets/person.png'

function Pg5() {
  return (
    <div className='pg5'>
        <img className='topimg' src={image} alt="" />
        <div className="info">
            <h3>Scheduled successfully!</h3>
            <div className="infomain">
                <span>
                    <img src={bag} alt="" />
                    Scheduled for September 18,2021</span><br />
                <span>
                    <img src={clock} alt="" />
                    From 10:30 to 10:45 am(`15 mins`)</span><br />
                <span>
                    <img src={person} alt="" />
                    Consultant will be our care counsellor</span><br />
                <span>
                    <img src={call} alt="" />
                    Consultation will be an audio call</span><br />
                <span>
                    <img src={link} alt="" />
                    Link sent on your email and whatsapp</span><br />
            </div>

        </div>

        <button className="btn">Done</button>
        
      
    </div>
  )
}

export default Pg5
