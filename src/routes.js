import React from 'react';
import {Router} from 'react-routing';
import HomePage from './client/components/HomePage/HomePage';
import DetailPage from './client/components/DetailsPage/DetailsPage';
import {store} from './client/data/index';
import {Provider} from 'react-redux';

export default new Router(router => {
  function attachState(Cmp) {
    return (
      <Provider store={store}>
        <Cmp />
      </Provider>
    );
  }

  router('/', () => attachState(HomePage));
});
