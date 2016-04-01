import './LearnMoreLinks.scss';
import React from 'react';
import {store} from '../../data/index';

function handleModal() {
  return store.dispatch({type: 'SHOW_MODAL'});
}

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
        onClick={handleModal}
        className="btn btn-primary"
      >
        Lets Talk!
      </a>
    </div>
  );
}
