import './Footer.scss';
import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">

      </div>
      <div className="company-info">
        <div className="container">
          Matt Lo is an independent consultant in Chicago, IL. Matt Lo,
          LLC {(new Date).getFullYear()}.
        </div>
      </div>
    </div>
  );
}
