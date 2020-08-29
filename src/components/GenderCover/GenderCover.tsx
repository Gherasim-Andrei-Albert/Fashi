import React from 'react';
import './GenderCover.scss';

type GenderCoverProps = {
  cover: string;
  coverTitle: string;
};

const GenderCover: React.FC<GenderCoverProps> = (props: GenderCoverProps) => (
  <div
    className="GenderCover container-sm"
    style={{
      backgroundImage: `url(/img/${props.cover})`,
    }}
  >
    <div>
      <h2>{props.coverTitle}</h2>
      <a href="#">discover more</a>
    </div>
  </div>
);

export default GenderCover;
