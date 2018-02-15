import '../../libs/bootstrap.scss';
import './HomePage.scss';
import React from 'react';

export default function HomePage() {
  return (
    <div
      className="homepage"
      style={{
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        background: '#333'
      }}
    >
      <h1>Matt Lo</h1>
      <h3>
        CTO @ <a href="https://www.innovadiv.com">Innovadiv.com</a>
      </h3>
      <hr />
      <p style={{fontSize: '18px'}}>
        If you came here for consulting, I no longer offer those services.
        <br /><br />
        If you came here to know more about me, read my tweets at
        {' '}
        <a href="https://www.twitter.com/Matt_Lo">
          @Matt_Lo
        </a>.
        <br /><br />
        If you came here to invest, DM
        {' '}
        <a href="https://www.twitter.com/Matt_Lo">
          @Matt_Lo
        </a>.
        <br /><br />
        If you came here for JavaScript expertise, open a StackOverflow link and DM the link to
        {' '}
        <a href="https://www.twitter.com/Matt_Lo">
          @Matt_Lo
        </a>.
        <br /><br />
        If you want to meet up in Chicago, DM
        {' '}
        <a href="https://www.twitter.com/Matt_Lo">
          @Matt_Lo
        </a>.
      </p>
    </div>
  );
}
