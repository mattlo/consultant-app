const Hapi = require('hapi');
const inert = require('inert');
const path = require('path');

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
      res.redirect('/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'build')
      }
    }
  });

  // server.route({
  //   method: 'GET',
  //   path: '/favicon.ico',
  //   handler: (req, res) => res.file(path.resolve(__dirname, 'assets', 'favicon.ico/favicon.ico'))
  // });

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });
});
