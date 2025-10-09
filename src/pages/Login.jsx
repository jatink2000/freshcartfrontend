import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Login() {

  let [Login, setLogin] = useState({})

  let inputvalue = (e) => {
    setLogin({
      ...Login, [e.target.name]: e.target.value
    })
  }


  let submitbtn = () => {
    axios.post("http://localhost:5000/Login", { Login }).then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: "Login success",
          icon: "success"
        });
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Invalid user...",
        });
      }
    }).catch((err) => {
      console.log(err)
    })
  }




  return (
    <>
      <h1>Login component</h1>
      <input type='email' placeholder='enter your email' name='email' onChange={inputvalue} />
      <input type='password' placeholder='enter your password' name='password' onChange={inputvalue} />
      <button onClick={submitbtn}>Login</button>

    </>
  )
}

export default Login
