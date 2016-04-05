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
    <div className="homepage">
      <PersistentHeader />

      <HeroSalesPitch />

      <div className="container">
        <QuickOfferings />

        <hr />

        <CompanyHistory />

        <hr />
        <br />

        <div className="row">
          <div className="col-sm-6 top-choices">
            <h3>{MONTHS[(new Date()).getMonth()]}'s Top Choices</h3>
            <h4>Engineering Book:</h4>
            <p>
              <img
                style={{maxWidth: 100}}
                src="https://cdn.mattlo.io/april-book.jpg"
              />
              <br />
              Just Enough Software Architecture: A Risk-Driven Approach
              <br />
              <a
                target="_blank"
                className="btn btn-sm btn-primary"
                href="http://www.amazon.com/Just-Enough-Software-Architecture-Risk-Driven/dp/0984618104"
              >
                Amazon.com
              </a>
            </p>
            <h4>
              Articles, pull requests, and comments
            </h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/reactjs/redux/issues/291"
                >
                  API calls in actions within Redux
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://labstack.com/echo"
                >
                  Echo - Go Web Framework
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            {renderTweets()}
          </div>
        </div>
      </div>

      <Footer />
      <ContactModal />
    </div>
  );
}
