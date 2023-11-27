import React from 'react';
import "./Home.css";
import { products } from '../data/products';
import Product from './Product';
const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home__box">
        {
          products.map(item => (
            <Product name={item.name} image={item.image} price={item.priceCents / 100} />
          ))
        }
      </div>
    </div>
  )
}

export default Home