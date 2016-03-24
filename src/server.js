import Hapi from 'hapi';
import inert from 'inert';
import ReactDOM from 'react-dom/server';
import React from 'react';
import HomePage from './client/components/HomePage/HomePage';
import Layout from './client/components/Layout/Layout';
import path from 'path';

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 8000
});

// used for any potential client viewing the source code
const sourceAds = `<!--

  If you seek the source, https://github.com/mattlo/consultant-app is your guide.
  If you seek the truth, email  mlo@mattlo.io  to unlock technological and business potential.

-->`;

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

      res(`<!doctype html>\n${sourceAds}\n${html}`);
    }
  });

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'assets')
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
