import React from 'react'
import './Dcard.css'
import circle from '../Assets/circle.png'

function Dcard(props) {
  return (
    <button className='dcard'>
        <img src={circle} alt="" />
        <span>{props.disease}</span>

    </button>
  )
}

export default Dcard
