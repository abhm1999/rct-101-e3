import axios from "axios";
import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const [count, setCount ] =useState(9)
  const [cartItems,setCartItems]=useState()
  //  const prams = usePrams()
    useEffect(()=>{
      axios.get('http://localhost:8080/cartItems')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setCartItems(response.data)
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },[])
  const logout=()=>{
    
  }
  
  
  // console.log(cartItems)
  return (
    <div data-cy="navbar">
      {/* <Link data-cy="navbar-home-link"></Link> */}
      <span data-cy="navbar-cart-items-count">Cart:({count})</span>
      <button data-cy="navbar-login-logout-button " onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
