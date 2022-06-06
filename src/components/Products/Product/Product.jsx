import { useEffect, useState } from "react";
import React  from "react";
import axios from "axios"
// import { usePrams} from "react-router-dom"

const Product = (props) => {
  // Note: this id should come from api
  // const product = { id: 1 };
  // const [data,setData]=useState()
  // console.log(props)
  // setData(items)
  // console.log(data)
  const [count,setCount]=useState(1)
  const handleincount=()=>{
    setCount=count+1
  }
  const handledecount=()=>{
    setCount=count-1
  }
  const handledelete=(id)=>{
    for(let i=0;i<props.length;i++){
      if(props.id[i]===id){
        props[i]=null
      }
    }
  }
  const handlecart=()=>{
    
  }
if(props.length>0){
  return (
    <div>
    {props.map((produ)=>{
      <div data-cy={`product-${produ.id}`}>
      <h3 data-cy="product-name">{produ.name}</h3>
      <h6 data-cy="product-description">{produ.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={handlecart}>Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={handleincount}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems

            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={handledecount}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>handledelete(produ.id)}>Remove From Cart</button>
      </div>
    </div>

    })}
       

    
  </div>
  );
}
};

export default Product;
