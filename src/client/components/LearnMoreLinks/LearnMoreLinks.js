import './LearnMoreLinks.scss';
import React from 'react';

export default function LearnMoreLinks() {
  return (
    <div className="container text-xs-center learn-more-links">
      <a className="availability">
        I'm currently available for projects for the next 6 months
      </a>

      <br />

      <a
        className="btn btn-info"
        href="/experience-and-consultancy"
      >
        Learn More
      </a>

      <span> </span>

      <a
        className="btn btn-primary"
      >
        Lets Talk!
      </a>
    </div>
  );
}
