import Hapi from 'hapi';
import inert from 'inert';
import ReactDOM from 'react-dom/server';
import React from 'react';
import HomePage from './client/components/HomePage/HomePage';
import Layout from './client/components/Layout/Layout';

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 8000
});


server.register([
  {register: inert}
], pluginErr => {
  if (pluginErr) {
    console.error(pluginErr);
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, res) => {
      const props = {
        body: process.env.PROD ? ReactDOM.renderToString(<HomePage />) : undefined
      };

      const html = ReactDOM.renderToStaticMarkup(<Layout {...props} />);

      res(`<!doctype>${html}`);
    }
  });

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: 'assets',
        index: ['index.html']
      }
    }
  });

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });
});
