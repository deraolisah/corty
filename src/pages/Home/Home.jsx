import React from 'react';
import About from '../../components/About/About';
import ProductGrid from '../../components/ProductGrid/ProductGrid';


const Home = () => {
  return (
    <div className='home'>
      <ProductGrid />
      <About/>
      
    </div>
  )
}

export default Home;