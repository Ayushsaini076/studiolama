import React, { useEffect, useState } from 'react'
import image from '../Assets/lastimg.png'
import './Pg5.css'
import bag from '../Assets/scheduled.png'
import clock from '../Assets/time.png'
import call from '../Assets/called.png'
import link from '../Assets/Link.png'
import person from '../Assets/person.png'

function Pg5() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001",{
          method:"GET",
        })
        .then(response => response.json())
        .then(data => setData(data));
    },[])
  return (
    <div className='pg5'>
        <img className='topimg' src={image} alt="" />
        <div className="info">
            <h3>Scheduled successfully!</h3>
            <div className="infomain">
                <span>
                    <img src={bag} alt="" />
                    Scheduled for {data.date}</span><br />
                <span>
                    <img src={clock} alt="" />
                    From {data.time}(`15 mins`)</span><br />
                <span>
                    <img src={person} alt="" />
                    Consultant will be our care counsellor</span><br />
                <span>
                    <img src={call} alt="" />
                    Consultation will be a video call</span><br />
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
