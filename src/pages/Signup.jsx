import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Signup() {

  let [signup, setsignup] = useState({})

  let inputvalue = (e) => {
    setsignup({
      ...signup, [e.target.name]: e.target.value
    })
  }


  let submitbtn = () => {
    axios.post("http://localhost:5000/signup", { signup }).then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: "signup success",
          icon: "success"
        });
      }
      else {
        Swal.fire({
          icon: "error",
          title: "failed to success",
        });
      }
    }).catch((err) => {
      console.log(err)
    })
  }




  return (
    <>
      <h1>signup component</h1>

      <input type='email' placeholder='enter your email' name='email' onChange={inputvalue} />
      <input type='password' placeholder='enter your password' name='password' onChange={inputvalue} />
      <button onClick={submitbtn}>signup</button>

    </>
  )
}

export default Signup
