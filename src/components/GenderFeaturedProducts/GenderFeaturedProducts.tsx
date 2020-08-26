import React from 'react';
import GenderCover from '../GenderCover/GenderCover';
import FeaturedProductsCarousel from '../FeaturedProductsCarousel/FeaturedProductsCarousel';
import './GenderFeaturedProducts.scss';

const GenderFeaturedProducts: React.FC = () => (
  <section className="GenderFeaturedProducts">
    <GenderCover />
    <FeaturedProductsCarousel />
  </section>
);

export default GenderFeaturedProducts;
