import React from 'react';
import './GenderCover.scss';

const GenderCover: React.FC = () => (
  <div className="GenderCover container-sm">
    {/* Image has emty alt because it's only a decoration image and css image dosen't work here. */}
    <img
      src={`${process.env.PUBLIC_URL}/img/products/women-large.jpg`}
      alt=""
    />
    <div>
      <h2>Women's</h2>
      <a href="#">discover more</a>
    </div>
  </div>
);

export default GenderCover;
