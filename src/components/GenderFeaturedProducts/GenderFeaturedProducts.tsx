import React from 'react';
import GenderCover from '../GenderCover/GenderCover';
import FeaturedProductsCarousel from '../FeaturedProductsCarousel/FeaturedProductsCarousel';
import { FeaturedProduct } from '../FeaturedProductsCarousel/FeaturedProductType';
import { PromotionFeaturedProduct } from '../FeaturedProductsCarousel/PromotionFeaturedProductType';
import './GenderFeaturedProducts.scss';

type GenderFeaturedProductsProps = {
  className: string;
  cover: string;
  coverTitle: string;
  products: (FeaturedProduct | PromotionFeaturedProduct)[];
};

const GenderFeaturedProducts: React.FC<GenderFeaturedProductsProps> = (
  props: GenderFeaturedProductsProps
) => (
  <section className={`GenderFeaturedProducts ${props.className}`}>
    <GenderCover cover={props.cover} coverTitle={props.coverTitle} />
    <FeaturedProductsCarousel products={props.products} />
  </section>
);

export default GenderFeaturedProducts;
