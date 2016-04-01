import './Footer.scss';
import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="about-me">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <p>
                Contact me anytime at <strong>
                <a href="mailto:mlo@mattlo.io">mlo@mattlo.io</a></strong> and lets work
                together to discover the opportunities.
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <p>
                I'm a JavaScript architect consultant focusing on solution design, performance,
                scalability, delivery, maintainability, and security.
              </p>
            </div>
            <div className="col-md-4 col-xs-12">
              <a className="availability">
                I'm currently available for contracts for the next 6 months.
              </a>
            </div>
          </div>
        </div>
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
