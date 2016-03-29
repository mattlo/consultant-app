import React from 'react';
import {Router} from 'react-routing';
import HomePage from './client/components/HomePage/HomePage';
import DetailPage from './client/components/DetailsPage/DetailsPage';

export default new Router(router => {
  router('/', () => <HomePage />);
  router('/experience-and-consultancy', () => <DetailPage />);
  router('/case-study/innovadiv-com', () => <DetailPage />);
  router('/case-study/torys-com', () => <DetailPage />);
  router('/case-study/championautoparts-com', () => <DetailPage />);
});
