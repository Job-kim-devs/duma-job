import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
 const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[loading, setLoading] = useState("")
  const[error, setError] = useState("")
  const navigate = useNavigate()
  // function to post data in the database
  const submit = async (e) => {
    // prevent the form default behavior of reloading
    e.preventDefault()
    // updating the loading message
    setLoading("Please wait as we log you in")
    // adding user inputs to the database
    try {
      // storing user inputs into data variable
      const data = new FormData()
      data.append("email", email)
      data.append("password", password)
      // posting user input into the database
      const response = await axios.post("http://dumajob.alwaysdata.net/api/signin", data)
      // updating loading message to empty
      setLoading("")
      // checking if the user exits
      if (response.data.user) {
        // adding the user to the browser localstorage
        localStorage.setItem("user", JSON.stringify(response.data.user))
        // redirecting user to the landing page
        navigate("/")
      }
      else{
        // if the login fails
        setError(response.data.Message)
      } 
    } catch (error) {
      // updating loading to empty
      setLoading("")
      // updating error message
      setError(error.data.message)
    }
  }
  return (
    <div className='row mt-4 justify-content-center'>
        <div className='col-md-6 card shadow p-4'>
          <h2>Sign In</h2>
          <form onSubmit={submit}>
            {loading}
            {error}
            <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
            <input type="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>
            <button className='btn btn-primary w-100' type='submit'>
              Sign in
            </button>
            <p>Don't have an account?<Link to="/signup">Sign up</Link></p>
          </form>
        </div>
    </div>
  )
}

export default Signin