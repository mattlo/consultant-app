import './CompanyHistory.scss';
import React from 'react';

export default function CompanyHistory() {
  const logos = [
    'federal-mogul.png',
    'ge-capital-logo.png',
    'hyatt-logo.png',
    'tribune-logo.png',
    'gt-logo.png',
    'maestro-logo.png',
    'sears-logo.png',
    'baxter-logo.png',
    'torys-logo.png',
    'learn-frontend-logo.png',
    'innovadiv-logo.png',
    'nfcu-logo.jpg'
  ];

  return (
    <div className="company-history">
      <h2>Past work engagements</h2>

      <div className="company-list clearfix">
        {logos.map((src, index) => (
          <div className="company-list-item" key={index}>
            <div className="contents">

              <img src={`https://cdn.mattlo.io/${src}`} />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
