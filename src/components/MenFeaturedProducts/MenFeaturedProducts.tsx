import React from 'react';
import GenderFeaturedProducts from '../GenderFeaturedProducts/GenderFeaturedProducts';
import { FeaturedProduct } from '../FeaturedProductsCarousel/FeaturedProductType';
import { PromotionFeaturedProduct } from '../FeaturedProductsCarousel/PromotionFeaturedProductType';
import './MenFeaturedProducts.scss';

const featuredProducts: (FeaturedProduct | PromotionFeaturedProduct)[] = [
  {
    img: 'man-1.jpg',
    alt: 'yellow man bag',
    category: 'coat',
    name: 'Pure Pineapple',
    price: 14,
    oldPrice: 35,
  },
  {
    img: 'man-2.jpg',
    alt: 'yellow man shoes',
    category: 'shoes',
    name: 'Guangzhou sweater',
    price: 13,
  },
  {
    img: 'man-3.jpg',
    alt: 'grey man jaquet',
    category: 'towel',
    name: 'Pure Pineapple',
    price: 34,
  },
  {
    img: 'man-4.jpg',
    alt: 'grey man jaquet',
    category: 'towel',
    name: 'Converse Shoes',
    price: 34,
  },
];

const MenFeaturedProducts: React.FC = () => (
  <GenderFeaturedProducts
    className="MenFeaturedProducts"
    cover="products/man-large.jpg"
    coverTitle="Men's"
    products={featuredProducts}
  />
);

export default MenFeaturedProducts;
