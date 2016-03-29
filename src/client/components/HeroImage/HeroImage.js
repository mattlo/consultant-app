import './HeroImage.scss';
import React from 'react';

export default function HeroImage({src, children}) {
  return (
    <div className="hero-sales-pitch">
      <div className="video embed-responsive embed-responsive-16by9">
        <img src={src} className="embed-responsive-item" />
      </div>

      <div className="contents">
        <div className="container">
          <h1 className="headline">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
}

HeroImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};
