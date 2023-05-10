import React from 'react'
import { Link } from 'react-router-dom'
import uncoloredscroll from '../Assets/Vector (4).png'
import coloredscroll from '../Assets/Vector (5).png'
import backicon from '../Assets/Group.png'
import './Pg3.css'

function Pg3() {
  return (
    <div className='pg3'>
        <div className="ht">
        <Link to="/pg2">
            <img src={backicon} alt="" />
        </Link>
            Back
        </div>
        <div className="pg">
            <img src={coloredscroll} alt="" />
            <img src={coloredscroll} alt="" />
            <img src={coloredscroll} alt="" />
            <img src={uncoloredscroll} alt="" />
        </div>
        <h3>Any other information you'd like us <br />to know?
        </h3>

        <form action="">
            <textarea  placeholder='Mention any medical history,family history,any incident which caused concern , food and sleep routine' name="" id="" cols="40" rows="5"></textarea>
        </form>

        <Link to='/pg4'>
        <button className='btn'>Next</button>
        </Link>
        
      
    </div>
  )
}

export default Pg3
