import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/esm/Button';
import './HeaderCarousel.scss';

const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const backgrounds: any[] = [
  require('../../img/hero-1.jpg'),
  require('../../img/hero-2.jpg'),
];

const HeaderCarousel: React.FC = () => (
  <section className="HeaderCarousel">
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      customTransition="none"
    >
      {backgrounds.map((background) => (
        <div
          className="HeaderCarousel__slide"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container-sm">
            <span>bag,kids</span>
            <h2>Black friday</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <Button>shop now</Button>
          </div>
        </div>
      ))}
    </Carousel>
  </section>
);

export default HeaderCarousel;
