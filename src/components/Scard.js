import React from 'react'
import './Scard.css'
import { Link } from 'react-router-dom'
// import SandC from './SandC'

function Scard(props) {

  return (
    
    <button  className='card'>
      <img src={props.img} alt="" />
      <div className="ccontent">
      <h4>{props.heading}</h4>
      <p>{props.para}</p>

      </div>
      
    </button>
    
    
  )
}

export default Scard
