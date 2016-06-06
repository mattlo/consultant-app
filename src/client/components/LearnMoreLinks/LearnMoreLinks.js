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
        I'm currently available for projects in Q3/Q4 2016.
      </a>

      <br />

      <a
        className="btn btn-info"
        href="/experience-and-consultancy"
      >
        <i className="fa fa-info-circle" />&nbsp; Learn More
      </a>

      <span> </span>

      <a
        onClick={handleModal}
        className="btn btn-primary"
      >
        <i className="fa fa-commenting" /> Lets Talk!
      </a>
    </div>
  );
}
