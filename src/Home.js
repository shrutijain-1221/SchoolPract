import React, { useEffect,useState } from 'react'
import ProductListing from './ProductListing'

const Home = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
fetch('https://dummyjson.com/products').then((res)=>res.json()).then((res)=>setProducts(res.products))
    },[])
    console.log(products)
  return (
   <>
   <div className='maindiv'>
   <h2>Trendy Products</h2>
   <ProductListing/>
   </div>
   </>
  )
}

export default Home