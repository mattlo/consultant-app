import './CompanyHistory.scss';
import React from 'react';

export default function CompanyHistory() {
  const logos = [
    '/assets/federal-mogul.png',
    '/assets/ge-capital-logo.png',
    '/assets/hyatt-logo.png',
    '/assets/tribune-logo.png',
    '/assets/gt-logo.png',
    '/assets/maestro-logo.png',
    '/assets/sears-logo.png',
    '/assets/baxter-logo.png',
    '/assets/torys-logo.png',
    '/assets/learn-frontend-logo.png',
    '/assets/innovadiv-logo.png',
    '/assets/nfcu-logo.jpg'
  ];

  return (
    <div className="company-history">
      <h2>Past work engagements</h2>

      <div className="company-list clearfix">
        {logos.map((src, index) => (
          <div className="company-list-item" key={index}>
            <div className="contents">

              <img src={src} />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
