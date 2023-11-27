import React from 'react';
import './Product.css';

const Product = ({name, image, price}) => {
  return (
    <div className="product__wrapper">
        <div className="product__imagebox">
          <img className="product__image" src={image} alt='pc' />
        </div>
          <h1>{name}</h1>
          <h2>{price}</h2>
          <button>Add To Cart</button>
          <div>
            store
          </div>
    </div>
  )
}

export default Product