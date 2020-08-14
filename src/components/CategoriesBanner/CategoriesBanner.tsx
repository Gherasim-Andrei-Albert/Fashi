import React from 'react';
import './CategoriesBanner.scss';

const CategoriesBanner: React.FC = () => (
  <section className="CategoriesBanner">
    <div>
      <img src={require('../../img/banner-1.jpg')} alt="man" />
      <span>Men's</span>
    </div>
    <div>
      <img src={require('../../img/banner-2.jpg')} alt="woman" />
      <span>Women's</span>
    </div>
    <div>
      <img src={require('../../img/banner-3.jpg')} alt="kid" />
      <span>Kid's</span>
    </div>
  </section>
);

export default CategoriesBanner;
