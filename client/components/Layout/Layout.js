if (process.env.RC) require('./HomePage.scss');
import React from 'react';

export default function Layout({body}) {
  return (
    <html>
      <head>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <title>JavaScript Architecture, Implementation, and Training by Matt Lo</title>

      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: body}} />
        <script src="//localhost:8002/assets/bundle.js"></script>
      </body>
    </html>
  );
}

Layout.propTypes = {
  body: React.PropTypes.string
};
