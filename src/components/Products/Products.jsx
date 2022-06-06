import React from "react";
import { useEffect, useState } from "react";
// import React  from "react";
import axios from "axios"
import Product from "./Product/Product";
const Products = () => {

  const [items, setItems] = useState([])
  const [cartItems,setCartItems]=useState()
//  const prams = usePrams()
  useEffect(()=>{
    axios.get('http://localhost:8080/products')
    .then(function (response) {
      // handle success
      // console.log(response.data);
      setItems(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  },[])

//  useEffect(()=>{
//   axios.get('http://localhost:8080/cartItems')
//     .then(function (response) {
//       // handle success
//       // console.log(response.data);
//       setCartItems(response.data)
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
//  },[])
  return <div>
    <div>Products</div>
    <Product Product={items}></Product>
  </div>;
};

export default Products;
