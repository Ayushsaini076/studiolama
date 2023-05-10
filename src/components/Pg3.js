import React from 'react'
import { Link } from 'react-router-dom'
import uncoloredscroll from '../Assets/Vector (4).png'
import coloredscroll from '../Assets/Vector (5).png'
import backicon from '../Assets/Group.png'
import './Pg3.css'
import { useFormik } from 'formik'

const initialValues={
    textarea:""
}

function Pg3() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      
      onSubmit: (values, action) => {
        fetch("http://localhost:3001", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then(function (response) {
          console.log(response.status);
        });
        console.log(values);
        // action.resetForm();
      },
    });
  return (
    <div className='pg3'>
        <div className="ht">
        <Link to={`/dpage`}>
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

        <form onSubmit={handleSubmit} action="">
            <textarea
             name="textarea"
            placeholder='Mention any medical history,family history,any incident which caused concern , food and sleep routine'
              id="textarea"
              value={values.textarea}
              onChange={handleChange}
              onBlur={handleBlur}
               cols="40" rows="5"></textarea><br />

        <Link to='/pg4'>
        <button className='btn' type='submit'>Next</button>
        </Link>
           
        </form>

        
        
      
    </div>
  )
}

export default Pg3
