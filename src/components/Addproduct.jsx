import axios from 'axios'
import React, { useState } from 'react'

const Addproduct = () => {
const[productname, setProductname] = useState("")
  const[description, setDescription] = useState("")
  const[cost, setCost] = useState("")
  const[productphoto, setProductphoto] = useState("")
  const[loading, setLoading] = useState("")
  const[success, setSuccess] = useState("")
  const[error, setError] = useState("")
  const submit = async (e) => {
    e.preventDefault()
    setLoading("Please wait as we add your product")
    try {
      // storing user inputs into a data variable
      const data = new FormData()
      data.append("product_name", productname)
      data.append("product_description", description)
      data.append("product_cost", cost)
      data.append("product_photo", productphoto)
      // connecting to the flask api using axios
      const response = await axios.post("http://dumajob.alwaysdata.net/api/add_product", data)
      setLoading("")
      setSuccess(response.data.Message)
      // clearing the inputs
      setProductname("")
      setDescription("")
      setCost("")
      setProductphoto("")
    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }
  return (
    <div className='row mt-4 justify-content-center'>
      <div className='col-md-6 card shadow p-4'>
       <h2>Add Product</h2>
        <form onSubmit={submit}>
          {loading}
          {success}
          {error}
          <p className='text-start'>Product Name</p>
          <input type="text" className='form-control' value={productname} onChange={(e) => setProductname(e.target.value)}/>
          <p className='text-start'>Description</p>
          <textarea name="" id="" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <p className='text-start'>Cost(Ksh)</p>
          <input type="number" className="form-control text-success" value={cost} onChange={(e) => setCost(e.target.value)}/>
          <p className='text-start'>Product Photo</p>
          <input type="file" accept='image/*' className='form-control' onChange={(e) => setProductphoto(e.target.files[0])}/><br></br>
          <button type='submit' className='btn btn-primary'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  
  )
}

export default Addproduct