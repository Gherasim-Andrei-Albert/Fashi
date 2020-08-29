import React from 'react';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import CategoriesBanner from '../CategoriesBanner/CategoriesBanner';
import DealOfTheWeek from '../DealOfTheWeek/DealOfTheWeek';
import MenFeaturedProducts from '../MenFeaturedProducts/MenFeaturedProducts';
import WomenFeaturedProducts from '../WomenFeaturedProducts/WomenFeaturedProducts';
import './Home.scss';

const Home: React.FC = () => (
  <main className="Home">
    <HeaderCarousel />
    <CategoriesBanner />
    <WomenFeaturedProducts />
    <DealOfTheWeek />
    <MenFeaturedProducts />
  </main>
);

export default Home;
