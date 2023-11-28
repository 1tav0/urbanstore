import React from 'react';
import "./Home.css";
import { products } from '../data/products';
import Product from './Product';
const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home__box">
        {
          products.map(product => (
            <Product name={product.name} image={product.image} price={product.priceCents / 100} rating={2} />
          ))
        }
      </div>
    </div>
  )
}

export default Home