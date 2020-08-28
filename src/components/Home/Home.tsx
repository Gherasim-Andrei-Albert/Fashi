import React from 'react';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import CategoriesBanner from '../CategoriesBanner/CategoriesBanner';
import GenderFeaturedProducts from '../GenderFeaturedProducts/GenderFeaturedProducts';
import DealOfTheWeek from '../DealOfTheWeek/DealOfTheWeek';
import './Home.scss';

const Home: React.FC = () => (
  <main className="Home">
    <HeaderCarousel />
    <CategoriesBanner />
    <GenderFeaturedProducts />
    <DealOfTheWeek />
  </main>
);

export default Home;
