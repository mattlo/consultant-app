import './HeroImage.scss';
import React from 'react';

export default function HeroImage() {
  return (
    <div className="hero-sales-pitch">
      <div className="video embed-responsive embed-responsive-16by9">
        <img src="https://cdn.mattlo.io/pluto.jpg" className="embed-responsive-item" />
      </div>

      <div className="contents">
        <div className="container">
          <h1 className="headline">
            Test
          </h1>
        </div>
      </div>
    </div>
  );
}
