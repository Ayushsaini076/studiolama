import React from "react";
import "./pg2.css";
import {myArr,Scard} from "./Scard";
import symptoms01 from "../Assets/Group0.png";
import symptoms02 from "../Assets/Group (1).png";
import symptoms03 from "../Assets/Group (2).png";
import symptoms04 from "../Assets/Group (3).png";
import symptoms05 from "../Assets/Group (4).png";
import symptoms06 from "../Assets/Group (5).png";
import { Link } from "react-router-dom";
import uncoloredscroll from '../Assets/Vector (4).png'
import coloredscroll from '../Assets/Vector (5).png'
import backicon from '../Assets/Group.png'
import { useLocation } from "react-router-dom";
import { useState } from "react";
// const myArray = [];

function Pg2() {

  

  const location = useLocation();
  const cname = new URLSearchParams(location.search).get('myname')

  const childSymptomsList = [
    {
      "id": 1,
      "icon": symptoms01,
      // activeIcon: symptoms07,
      "name": "Speech and Communication",
      "info": "Difficulty in speaking, stutters, stammers...",
    },
    {
      "id": 2,
      "icon": symptoms02,
      // activeIcon: symptoms08,
      "name": "Food and Nutrition",
      "info": "Underweight child, food allergies, picky eater...",
    },
    {
      "id": 3,
      "icon": symptoms03,
      // activeIcon: symptoms09,
      "name": "Developmental Issues",
      "info": "Premature birth, ADHD, Autism...",
    },
    {
      "id": 4,
      "icon": symptoms04,
      // activeIcon: symptoms10,
      "name": "Skin, Allergies, Sleep etc.",
      "info": "Rashes, acne, distrubed sleep, dry skin...",
    },
    {
      "id": 5,
      "icon": symptoms05,
      // activeIcon: symptoms11,
      "name": "Gross Motor and Movement",
      "info": "Crawling, walking, jumping, catching...",
    },
    {
      "id": 6,
      "icon": symptoms06,
      // activeIcon: symptoms12,
      "name": "Behavior and Social",
      "info": "Cries a lot, tantrums, pinches, bites...",
    },
  ];

  

  
  return (
    <div className="pg2">
        <div className="ht">
        <Link to="/">
            <img src={backicon} alt="" />
        </Link>
            Back
        </div>
        <div className="pg">
            <img src={coloredscroll} alt="" />
            <img src={coloredscroll} alt="" />
            <img src={uncoloredscroll} alt="" />
            <img src={uncoloredscroll} alt="" />
        </div>
      <h3>{cname} needs help with...</h3>
      <div className="sbox">
        {childSymptomsList.map((element) => {
          // console.log(element);
          return (
            
            <Scard 
              key={element.id}
              img={element.icon}
              heading={element.name}
              para={element.info}
            />
            
            
          );
        })}
      </div>

      {/* {myArr.map((ele)=>{
        console.log(ele);
      })} */}
      <Link to={`/dpage?myname=${cname}&&dname=Speech and Communication`}>
      <button className="btn">Next</button>
      </Link>
      
    </div>
  );
}

export default Pg2;
