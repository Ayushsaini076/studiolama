import React, { useState } from 'react'
import './Scard.css'
import { Link } from 'react-router-dom'
// import SandC from './SandC'
// const [item,setItem]=useState([]);
const myArr=[];

function Scard(props) {
  const [color,setColor]=useState('#FFFFFF');
  

  var value = props.heading;

  const handleClick=()=>{
    setColor('#EDE7F6');
    myArr.concat({value});
  };

 
  return (
    
    <button style={{backgroundColor:color}} onClick={handleClick}   className='card'>
      <img src={props.img} alt="" />
      <div className="ccontent">
      <h4>{props.heading}</h4>
      <p>{props.para}</p>

      </div>
      
    </button>

  )

  
}


export  {myArr,Scard}
