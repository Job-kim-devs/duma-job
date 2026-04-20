import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
   const {product} = useLocation ().state || {}
    const img_url = "http://dumajob.alwaysdata.net/static/images/"
    const[phone, setPhone] = useState("")
    const[message, setMessage] = useState("")
    const[error, setError] = useState("")

    // function to make payment with mpesa
    const submit = async (e) => {
        // preventing default loading behavior of a form
        e.preventDefault ()
        // set a message
        setMessage("Please wait as we process...")
        // connecting axios to the flask endpoint
        try {
            const data = new FormData()
            // attaching user inputs to the data variable
            data.append ("phone", phone)
            data.append ("amount", product.product_cost)
            const response = await axios.post("http://dumajob.alwaysdata.net/api/mpesa_payment", data)
            // update the message
            setMessage("Please complete payment in your phone")
        } catch (error) {
            setMessage("")
            setError(error.message)
        }
    }
  return (
    <div>
        <h1>Makepayment - Lipa na Mpesa</h1>
        <div className='row mt-4 justify-content-center'>
        <div className="col-md-4 card shadow p-4">
        <img src={img_url + product.product_photo} alt="" />
        <p>{product.product_name}</p>
        <p>{product.product_description}</p>
        <p className='text-success'>{product.product_cost}</p>
        <form onSubmit={submit}>
            {message}
            {error} 
            <input type="tel" placeholder='Enter phone 2547XXX' value={phone} onChange={(e) => setPhone(e.target.value)}/><br /><br />
            <button type='submit' className='btn btn-success'>Make Payment</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Makepayment