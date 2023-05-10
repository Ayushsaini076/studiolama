import React, { useState } from 'react'
import './Dcard.css'
import circle from '../Assets/circle.png'
import { useFormik } from 'formik'

const initialValues={
  grp2:""

}

function Dcard(props) {
  const [color,setColor]=useState('#FFFFFF')

  const handleClick=()=>{
    setColor('#EDE7F6')
  }
  const { values, errors, touched, handleBlur,handleChange, handleSubmit } =
    useFormik({
      initialValues,
      
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
        console.log(  
          values
        );
        // action.resetForm();
      },
    });
  console.log(
    errors
  );
  return (
    <div style={{backgroundColor:color}}  className="dcard">
      <form onSubmit={handleSubmit} action="">
      <label htmlFor="">
          <input
           type="radio"
            name="grp2"
            //  value="1" 
             value={values.grp2} 
             onClick={handleClick}
             onChange={handleChange}
             onBlur={handleBlur} />
          {props.disease}
        </label><br />
      </form>

      
      
    </div>

    
  )
}

export default Dcard
