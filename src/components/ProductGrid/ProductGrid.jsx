import React from 'react';
import Card from '../Card/Card';
import './ProductGrid.scss';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';

export const products = [
  {
    id: 1,
    name: "Future Islands - House of blues",
    price: 250,
    imageUrl: img1,
  },
  {
    id: 2,
    name: "Future Islands - Chicago Theater",
    price: 250,
    imageUrl: img2,
  },
  {
    id: 3,
    name: "Bright Eyes - Forest Hills Stadium",
    price: 250,
    imageUrl: img3,
  },
  {
    id: 4,
    name: "Nyte on Tech 2",
    price: 250,
    imageUrl: img4,
  },
  {
    id: 5,
    name: "The Atlantic Disco",
    price: 250,
    imageUrl: img5,
  },
  {
    id: 6,
    name: "Sounds Good",
    price: 250,
    imageUrl: img6,
  },
  {
    id: 7,
    name: "Car Park Remix",
    price: 250,
    imageUrl: img7,
  },
  {
    id: 8,
    name: "Fleet Floxes Flower Drip",
    price: 250,
    imageUrl: img8,
  },
];

const ProductGrid = () => {

  return (
    <>
      <h1> Hi, I'm corty. I make digital designs for brands of the future. </h1>
      <div className='product-grid'>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;