import React from 'react';
import { FeaturedProduct } from './FeaturedProductType';
import { PromotionFeaturedProduct } from './PromotionFeaturedProductType';
import Carousel from 'react-multi-carousel';
import Button from 'react-bootstrap/Button';
import 'react-multi-carousel/lib/styles.css';
import './FeaturedProductsCarousel.scss';

const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

type FeaturedProductsCarouselProps = {
  products: (FeaturedProduct | PromotionFeaturedProduct)[];
};

const FeaturedProductsCarousel: React.FC<FeaturedProductsCarouselProps> = (
  props: FeaturedProductsCarouselProps
) => (
  <div className="FeaturedProductsCarousel container-sm">
    <fieldset>
      <legend>featured products categories</legend>
      <div>
        <input type="radio" name="category" id="clothings" defaultChecked />
        <label htmlFor="clothings">Clothings</label>
        <input type="radio" name="category" id="hand_bag" />
        <label htmlFor="hand_bag">HandBag</label>
        <input type="radio" name="category" id="shoes" />
        <label htmlFor="shoes">Shoes</label>
        <input type="radio" name="category" id="accesories" />
        <label htmlFor="accesories">Accesories</label>
      </div>
    </fieldset>

    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      autoPlay={true}
      removeArrowOnDeviceType={['mobile']}
    >
      {props.products.map((product) => (
        <div className="product">
          <div className="product__img-container">
            <button className="heartBtn">
              <i className="far fa-heart" aria-hidden="true" />
            </button>
            <img
              className="product__img"
              src={`${process.env.PUBLIC_URL}/img/products/${product.img}`}
              alt={product.alt}
            />
            <div className="product__toolbar">
              <Button variant="primary" className="product__shopping-btn">
                <i className="fa fa-shopping-bag" aria-hidden="true" />
              </Button>
              <a href="#" className="product__quick-view-link">
                quick view
              </a>
              <a href="#" className="product__shuffle-link">
                <i className="fa fa-random" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="product__category">{product.category}</div>
          <h3>{product.name}</h3>
          <span className="product__price">
            {`$${product.price.toFixed(2)}`}
          </span>{' '}
          <span className="product__old-price">
            {'oldPrice' in product && `$${product.oldPrice.toFixed(2)}`}
          </span>
        </div>
      ))}
    </Carousel>
  </div>
);

export default FeaturedProductsCarousel;
