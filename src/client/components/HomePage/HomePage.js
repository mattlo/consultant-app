import './HomePage.scss';
import React from 'react';
import HeroSalesPitch from '../HeroSalesPitch/HeroSalesPitch';
import PersistentHeader from '../PersistentHeader/PersistentHeader';
import Footer from '../Footer/Footer';

export default () => (
  <div className="homepage">
    <PersistentHeader />
    <HeroSalesPitch />
    <Footer />
  </div>
);
