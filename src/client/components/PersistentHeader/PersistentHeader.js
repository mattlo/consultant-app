import './PersistentHeader.scss';
import React from 'react';

export default function PersistentHeader() {
  return (
    <div className="persistent-header">
      <div className="container">
        <div className="roi-text">
          <i className="icon-javascript-alt" />
          <span className="text-rotation">
            Architecture
          </span>
          <span className="text-rotation">
            Engineering
          </span>
          <span className="text-rotation">
            Training
          </span>
          <span className="text-rotation">
            Leadership
          </span>
        </div>
      </div>
    </div>
  );
}
