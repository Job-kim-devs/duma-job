import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Getproduct = () => {
  const [loading, setLoading] = useState ("")
  const [error, setError] = useState("")
  const [products, setProducts] = useState([])
  const img_url = "http://dumajob.alwaysdata.net/static/images/"
  const navigate = useNavigate ()
  // the function to fetch data from the database
  const getproducts = async () => {
    // adding loading message
    setLoading("Please wait as we retrieve products...")
    // connecting axios to the flask endpoint
    try {
      // fetching data from the database
      const response = await axios.get("http://dumajob.alwaysdata.net/api/get_product_details")
      setLoading("")
      setProducts(response.data)
    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }
  // adding useeffect hook to ensure our website renders only once
  useEffect (() => {
    getproducts()
  }, [])
  return (
    <div className='row'>
        <h2 className='text-success'>AVAILABLE PRODUCTS</h2>
        {loading}
        {error}
        {/* mapping all the products to a card */}
      {products.map((product) => (
          <div className='col-md-3 justify-content-center mb-4'>
            <div className="card shadow">
            <img src={img_url + product.product_photo} alt="" className='product_img'/>
            <div className="card-body">
              <h5>{product.product_name}</h5>
              <p>{product.product_description}</p>
              <p className='text-success'>Ksh.{product.product_cost}</p>
              <button className='btn btn-dark mt-2 w-100' onClick={() => navigate('/makepayment', {state: {product}})}>Purchase now</button>
            </div>
            </div>
          </div>
        ))}  
    </div>
  )
}

export default Getproduct