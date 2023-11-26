import React from 'react';
import './Home.css';
import Product from './Product';
import { products } from '../data/products';
const Home = () => {
  return (
    <div className="home__wrapper">
      {
        products.map(item => (
          <Product name={item.name} price={item.priceCents/100} photo={item.image} />
        ))
      }
    </div>
  )
}

export default Home