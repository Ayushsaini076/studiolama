import React, { useState } from "react";
import './pg1.css'
import { Link } from "react-router-dom";
import Pg2 from "./Pg2";
import uncoloredscroll from '../Assets/Vector (4).png'
import coloredscroll from '../Assets/Vector (5).png'
// import { Link } from "react-router-dom";
import backicon from '../Assets/Group.png'
import { useFormik } from "formik";
import { page1Schema } from "../Schemas/pg1schema";

const initialValues={
  name:"",
  email:"",
  number:"",
  dob:""
}

function Page1() {

  

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: page1Schema,
      onSubmit: (values, action) => {
        fetch("http://localhost:3001",{
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(values)
        })
        .then(function(response){
          console.log(response.status)
        })
        .catch(err=>{console.log(err)})
        console.log(  
          values
        );
        // action.resetForm();
      },
    });
  console.log(
    errors
  );

    const [flag,setFlag]=useState(false);
    


    const myStyle = {
      display:flag?"block":"none"
    };

    const clearradio=(name,value)=>{
        
        var radios = document.getElementsByName(name)
        for(var i = 0 ;i<radios.length;i++){
            if(radios[i].value !==value){
                radios[i].checked = false;
            }

        }
   
    }

  
  return (
    <div className="pg1">
      <div className="ht">
        
            <img src={backicon} alt="" />
        
            Back
        </div>
      <div className="pg">
            <img src={coloredscroll} alt="" />
            <img src={uncoloredscroll} alt="" />
            <img src={uncoloredscroll} alt="" />
            <img src={uncoloredscroll} alt="" />
        </div>
      <h3>
        Get your questions answered by <br />
        our consultants from the comfort of <br /> your home
      </h3>
      <form onClick={handleSubmit} action="">
        <label  htmlFor="">Child's name</label><br />
        <input
         name="name"
          className="ninput" 
          onChange={handleChange} 
          // value={cname}
          placeholder="Alice"
          type="text"
          value={values.name}
          // onChange={handleChange}
          onBlur={handleBlur}
              /><br />
        {errors.name && touched.name?(
          <p className="form-errors">{errors.name}</p>
        ):null}

        <label  htmlFor="">Child's date of birth</label><br />
        <input
         className="ninput"
          placeholder="9/14/2020"
          name="dob"
           type="text"
           value={values.dob}
          onChange={handleChange}
          onBlur={handleBlur}

            /><br />
          {errors.dob && touched.dob?(
          <p className="form-errors">{errors.dob}</p>
        ):null}


        <label  htmlFor="">Born at less than 37 weeks?</label><br />
        <label htmlFor="">
          <input type="radio" name="grp1" value="1" onClick={()=>{clearradio("grp1","1");setFlag(false)}} checked />
          No
        </label><br />
        <label htmlFor="">
          <input type="radio" name="grp1" value="2" onClick={()=>{clearradio("grp1","2"); setFlag(true)}} />
          Yes
        </label><br />

        {/* <div className="random">{flag}</div> */}

        
        <div style={myStyle}  className="variable">
        <label>Born in weeks</label><br />
        <input className="ninput" type="text" /><br />

        </div>
        
        

        <label className="cw" htmlFor="">Child's weight</label>
        <label htmlFor="">Weight unit</label><br />
        <input className="cin" type="text" />
        
        <select name="wt-units" id="">
          <option value="kg">Kg</option>
          <option value="kg">g</option>
          <option value="kg">pound</option>
        </select><br />

        <label className="cw" htmlFor="">Child's height</label>
        <label htmlFor="">Height unit</label><br />
        <input className="cin" type="text" />
        
        <select name="" id="">
          <option value="cm">cm</option>
          <option value="inches">inches</option>
        </select><br />

        <label htmlFor="">Email address</label><br />
        <input
         name="email"
          placeholder="james@gmail.com"
           className="ninput"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur} /><br />
        {errors.email && touched.email?(
          <p className="form-errors">{errors.email}</p>
        ):null}

        <label htmlFor="">Phone number</label><br />
        <select className="code" name="country-code" id="country-code">
          <option value="IN">+91</option>
          <option value="AF"> +93</option>
          <option value="AL">Albania (+355)</option>
          <option value="DZ">Algeria (+213)</option>
        </select>
        <input
         name="number"
          placeholder="number"
           className="pin"
            type="text"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur} />
        {errors.number && touched.number?(
          <p className="form-errors">{errors.number}</p>
        ):null}

      <Link to={`/pg2?myname=${values.name}`}>
      <button  className="btn"  type="submit">Next</button>
      </Link>


      </form>

      
      
        
        
    </div>
  );
}

export default Page1;
