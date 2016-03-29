import React from 'react';
import {Router} from 'react-routing';
import HomePage from './client/components/HomePage/HomePage';
import DetailPage from './client/components/DetailsPage/DetailsPage';

export default new Router(router => {
  router('/', () => <HomePage />);

  router('/matt-lo-experience-and-consultancy', () => <DetailPage />);
});
