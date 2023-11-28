import React from 'react';
import './Product.css';

const Product = ({name, image, price, rating}) => {
  return (
    <div className="product__wrapper">
      <img className="product__image" src={image} alt='pc' />
      <h1>{name}</h1>
      <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {
          Array(rating)
            .fill()
            .map((_,i) => (
              <p key={i}>⭐</p>
            ))
        }
      </div>
      <button>Add To Cart</button>
    </div>
  )
}

export default Product