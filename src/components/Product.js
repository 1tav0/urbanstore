import React from 'react';
import "./Product.css";
const Product = ({name, photo, price}) => {
  return (
    <div className="product__wrapper">
      <div className="product__box">
        <img className="product__picture" src={photo} alt="pc"/>
        <div className="product__description">
          <h1 className='product__name'>{name}</h1>
          <h1 className='product__price'>{price}</h1>
          <button className='product__button'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product