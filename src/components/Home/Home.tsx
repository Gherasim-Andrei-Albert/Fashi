import React from 'react';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import CategoriesBanner from '../CategoriesBanner/CategoriesBanner';
import './Home.scss';

const Home: React.FC = () => (
  <main className="Home">
    <HeaderCarousel />
    <CategoriesBanner />
  </main>
);

export default Home;
