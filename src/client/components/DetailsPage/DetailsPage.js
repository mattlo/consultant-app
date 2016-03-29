import '../../libs/bootstrap.scss';
import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import PersistentHeader from '../PersistentHeader/PersistentHeader';
import Footer from '../Footer/Footer';

export default function HomePage() {
  return (
    <div className="details-page">
      <PersistentHeader />
      <HeroImage />
      <Footer />
    </div>
  );
}
