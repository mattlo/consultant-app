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
        Founder/CEO of <a href="https://getchipbot.com">ChipBot, Inc.</a>
        <br />
        Startup Advisor
      </h3>
      <hr />
      <p>
        Twitter Account: <a href="https://www.twitter.com/Matt_Lo">https://www.twitter.com/Matt_Lo</a>
      </p>
      <hr />
      <p>
        Email: <a href="mailto:mlo@mattlo.io">mlo@mattlo.io</a>
      </p>
      <hr />
      <p>
        Cell Phone: DM on Twitter or email directly for this.
      </p>
    </div>
  );
}
