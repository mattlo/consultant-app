import Hapi from 'hapi';
import inert from 'inert';
import ReactDOM from 'react-dom/server';
import React from 'react';
import Layout from './client/components/Layout/Layout';
import path from 'path';
import Router from './routes';
import Iso from 'iso';

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
    path: '/{param*}',
    handler: (req, res) => {
      const iso = new Iso();

      function resolveResponse(props) {
        const html = ReactDOM.renderToStaticMarkup(<Layout {...props} />);

        res(`<!doctype html>\n${sourceAds}\n${html}`);
      }

      // only do server side rendering on prod, local dev webpack throws
      // react checksum issues
      const serverState = {path: req.path};

      if (process.env.PROD) {
        Router.dispatch(serverState, (state, component) => {
          iso.add(ReactDOM.renderToString(component), serverState);
          resolveResponse({body: iso.render()});
        });
      } else {
        iso.add('', serverState);
        resolveResponse({body: iso.render()});
      }
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
