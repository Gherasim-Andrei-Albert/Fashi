import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Partners.scss';

type Image = {
  src: any;
  alt: string;
};

const images: Image[] = [
  { src: require('../../img/logo-carousel/logo-1.png'), alt: 'logo' },
  { src: require('../../img/logo-carousel/logo-2.png'), alt: 'logo' },
  { src: require('../../img/logo-carousel/logo-3.png'), alt: 'logo' },
  { src: require('../../img/logo-carousel/logo-4.png'), alt: 'logo' },
  { src: require('../../img/logo-carousel/logo-5.png'), alt: 'logo' },
];

const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 3,
  },
};

const Partners: React.FC = () => (
  <div className="Partners">
    <div className="container-sm">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={false}
        infinite={true}
        autoPlay={true}
      >
        {images.map((img) => (
          <img src={img.src} alt={img.alt} />
        ))}
      </Carousel>
    </div>
  </div>
);

export default Partners;
