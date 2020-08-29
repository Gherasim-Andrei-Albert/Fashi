import React from 'react';
import GenderFeaturedProducts from '../GenderFeaturedProducts/GenderFeaturedProducts';
import { FeaturedProduct } from '../FeaturedProductsCarousel/FeaturedProductType';
import { PromotionFeaturedProduct } from '../FeaturedProductsCarousel/PromotionFeaturedProductType';
import './WomenFeaturedProducts.scss';

const featuredProducts: (FeaturedProduct | PromotionFeaturedProduct)[] = [
  {
    img: 'women-1.jpg',
    alt: 'yellow woman blouse',
    category: 'coat',
    name: 'Pure Pineapple',
    price: 14,
    oldPrice: 35,
  },
  {
    img: 'women-2.jpg',
    alt: 'grey woman blouse',
    category: 'shoes',
    name: 'Guangzhou sweater',
    price: 13,
  },
  {
    img: 'women-3.jpg',
    alt: 'grey woman blouse',
    category: 'towel',
    name: 'Pure Pineapple',
    price: 34,
  },
  {
    img: 'women-4.jpg',
    alt: 'white woman handbag',
    category: 'towel',
    name: 'Converse Shoes',
    price: 34,
  },
];

const WomenFeaturedProducts: React.FC = () => (
  <GenderFeaturedProducts
    className="WomenFeaturedProducts"
    cover="products/women-large.jpg"
    coverTitle="Women's"
    products={featuredProducts}
  />
);

export default WomenFeaturedProducts;
