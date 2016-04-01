import '../../libs/bootstrap.scss';
import './HomePage.scss';
import React from 'react';
import HeroSalesPitch from '../HeroSalesPitch/HeroSalesPitch';
import PersistentHeader from '../PersistentHeader/PersistentHeader';
import Footer from '../Footer/Footer';
import QuickOfferings from '../QuickOfferings/QuickOfferings';
import CompanyHistory from '../CompanyHistory/CompanyHistory';
import ContactModal from '../ContactModal/ContactModal';

export default function HomePage() {
  return (
    <div className="homepage">
      <PersistentHeader />

      <HeroSalesPitch />

      <div className="container">
        <QuickOfferings />

        <hr />

        <CompanyHistory />
      </div>

      <Footer />
      <ContactModal />
    </div>
  );
}
