import axios from 'axios'
import React, { useState } from 'react'

function Signup() {

   let [signup,setsignup]= useState({})

   let inputvalue=()=>{
    setsignup({
       ...signup,[ e.target.name]:e.target.value
    })
   }


   let submitbtn=()=>{
    axios.post("http://localhost:5000/signup",{signup})
   }




  return (
    <>
    <h1>signup component</h1>

    <input type='email' placeholder='enter your email' name='email' onChange={inputvalue}/>
    <input type='password' placeholder='enter your password' name='password' onChange={inputvalue}/>
    <button onClick={submitbtn}>signup</button>
      
    </>
  )
}

export default Signup
