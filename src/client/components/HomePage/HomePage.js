import '../../libs/bootstrap.scss';
import './HomePage.scss';
import React from 'react';
import HeroSalesPitch from '../HeroSalesPitch/HeroSalesPitch';
import PersistentHeader from '../PersistentHeader/PersistentHeader';
import Footer from '../Footer/Footer';
import QuickOfferings from '../QuickOfferings/QuickOfferings';
import CompanyHistory from '../CompanyHistory/CompanyHistory';
import ContactModal from '../ContactModal/ContactModal';
import Twitter from '../Twitter/Twitter';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

function renderTweets() {
  if (!process.env.RC) {
    return '';
  }

  return (
    <Twitter
      id="717411293062410240"
      screenname="Matt_Lo"
    />
  );
}

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
