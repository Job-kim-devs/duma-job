import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const Signup = () => {
// adding states for all the inputs
    const [username, setUsername] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [phone, setPhone] = useState ("")
    const [loading, setLoading] = useState ("")
    const [success, setSuccess] = useState ("")
    const [error, setError] = useState ("")
    // the function to post data in the database
    const submit =async (e) => {
        // preventing the default behaviour of the form reloading
        e.preventDefault()
        // updating the loading state with a message
        setLoading("Please wait as we upload your data")
        // updating user inputs into the database
        try {
            // storing user inputs into a data variable
            const data = new FormData()
            data.append("username", username)
            data.append("email", email)
            data.append("password", password)
            data.append("phone", phone)
            // connecting to the flask api using axios
            const response = await axios.post("http://dumajob.alwaysdata.net/api/signup", data)
            // removing the loading message
            setLoading("")
            // adding a success message
            setSuccess(response.data.Success)
            // clearing the inputs
            setUsername("")
            setEmail("")
            setPassword("")
            setPhone("")
        } catch (error) {
            setLoading("")
            // updating the error message
            setError(error.message)
        } 
    }
    return (
        <div className="row mt-4 justify-content-center">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign up</h2>
                <form onSubmit={submit}>
                    {loading}
                    {success}
                    {error}
                    <input type="text" placeholder="Enter username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required/><br />
                    <input type="email" placeholder="Enter email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/><br />
                    <input type="password" placeholder="Enter password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/><br />
                    <input type="tel" placeholder="Enter phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required/><br />
                    <button className="btn btn-primary" type="submit">
                        Sign up
                    </button><br />
                    <p>Already have an account? <Link to = "/signin">Sign in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup