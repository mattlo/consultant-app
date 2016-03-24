import '../../libs/bootstrap.scss';
import './HomePage.scss';
import React from 'react';
import HeroSalesPitch from '../HeroSalesPitch/HeroSalesPitch';
import PersistentHeader from '../PersistentHeader/PersistentHeader';
import Footer from '../Footer/Footer';

export default function HomePage() {
  return (
    <div className="homepage">
      <PersistentHeader />
      <HeroSalesPitch />
      <Footer />
    </div>
  );
}
