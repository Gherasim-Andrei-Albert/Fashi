import React, { useState } from 'react';
import Countdown from 'react-countdown';
import Button from 'react-bootstrap/Button';
import './DealOfTheWeek.scss';

const DealOfTheWeek: React.FC = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 31);
  return (
    <section className="DealOfTheWeek">
      <h2>Deal Of The Week</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ipsum
        dolor sit amet, consectetur adipisicing elit
      </p>
      <div>
        <span className="price">$35.00</span> / HanBag
      </div>
      <Countdown
        date={endDate}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return 'yey';
          } else {
            return (
              <div className="countdown">
                <div className="countdown__item">
                  <div className="countdown__time">{days}</div>
                  <div className="countdown__unit">days</div>
                </div>
                <div className="countdown__item">
                  <div className="countdown__time">{hours}</div>
                  <div className="countdown__unit">hrs</div>
                </div>
                <div className="countdown__item">
                  <div className="countdown__time">{minutes}</div>
                  <div className="countdown__unit">mins</div>
                </div>
                <div className="countdown__item">
                  <div className="countdown__time">{seconds}</div>
                  <div className="countdown__unit">secs</div>
                </div>
              </div>
            );
          }
        }}
      />
      <Button>shop now</Button>
    </section>
  );
};

export default DealOfTheWeek;
