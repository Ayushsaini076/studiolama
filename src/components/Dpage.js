import React from "react";
import { Link } from "react-router-dom";
import uncoloredscroll from "../Assets/Vector (4).png";
import coloredscroll from "../Assets/Vector (5).png";
import backicon from "../Assets/Group.png";
import { useLocation } from "react-router-dom";
import Dcard from "./Dcard";

function Dpage() {
  const location = useLocation();
  const dname = new URLSearchParams(location.search).get("dname");
  const cname = new URLSearchParams(location.search).get('myname')

  const childSymptomsType = [
    {
        "id":0,
        "symptoms": [
            "Does not talk much",
            "Speech is not clear",
            "Does not understand requests",
            "Hard to understand what they are saying",
            "Stutters or stammers",
            "Other issue"
        ],
        "name": "Speech and Communication"
    },
    {
        "id":1,
        "symptoms": [
            "Child is underweight",
            "Lactaction / milk supply",
            "Starting solids",
            "child is a picky eater",
            "constipation /colic/ gas",
            "Food allergies",
            "Other issue"
        ],
        "name": "Food and Nutrition"
    },
    {
        "id":2,
        "symptoms": [
            "Baby was born premature",
            "Has autism",
            "Has ADHD",
            "Has Cerebral Palsy",
            "Has Down Syndrome",
            "Other issue"
        ],
        "name": "Developmental Issues"
    },
    {
        "id":3,
        "symptoms": [
            "Dry skin/ eczema",
            "Baby acne",
            "Cradle cap",
            "child has disturbed sleep",
            "child does not sleep much",
            "rash on skin",
            "Other issue"
        ],
        "name": "Skin, Allergies, Sleep etc."
    },
    {
        "id":4,
        "symptoms": [
            "Sitting up",
            "Crawling",
            "Walking",
            "Running",
            "Jumping/ Climbing",
            "Catching/ throwing",
            "Other issue"
        ],
        "name": "Gross Motor and Movement"
    },
    {
        "id":5,
        "symptoms": [
            "Does not smile or make eye contact",
            "Play is different vs other kids",
            "Lacks interest in other people",
            "Throws tantrums",
            "Cries a lot",
            "Hits/ pinches/ bites",
            "Other issue"
        ],
        "name": "Behavior and Social"
    }
]


// console.log(disease)
  return (
    <div className="dpage">
      <div className="ht">
        <Link to={`/pg2?myname=${cname}`}>
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
      <h3>Tell us in more about {cname}'s {dname}</h3>
      <div className="dbox">
        {/* {disease.symptoms.map((ele)=>console.log(ele))} */}
        {childSymptomsType.map((element)=>{
          if(element.name===dname){
          return(
            
              element.symptoms.map((ele)=>{
                console.log(ele);
                return(
                  <Dcard
                  disease={ele}
                  />
              
  
                )
                
              })
            

          )
            }
          
        })}
        
      </div>
      <Link to="/pg3">
      <button className="btn">Next</button>
      </Link>
      
    </div>
  );
}

export default Dpage;
