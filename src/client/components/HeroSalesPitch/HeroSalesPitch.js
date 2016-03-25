import './HeroSalesPitch.scss';
import React from 'react';
import {isTouchDevice} from '../../util/common';

export default function HeroSalesPitch() {
  return (
    <div className="hero-sales-pitch">
      <div className="video embed-responsive embed-responsive-16by9">
        <img src="https://cdn.mattlo.io/pluto.jpg" className="embed-responsive-item" />

        {!isTouchDevice() ? (
          <video preload autoPlay muted loop className="embed-responsive-item fx">
            <source src="https://cdn.mattlo.io/pluto.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src="https://cdn.mattlo.io/pluto.gif" className="embed-responsive-item fx" />
        )}
      </div>

      <div className="contents">
        <div className="container">
          <h1 className="headline">
            Discover what <span className="name">Matt</span> can unlock in your engineering team.
          </h1>
        </div>
      </div>
    </div>
  );
}
