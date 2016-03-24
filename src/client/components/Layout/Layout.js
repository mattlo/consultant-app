import React from 'react';

export default function Layout({body}) {
  const showDistAssets = process.env.PROD;
  let host = '';

  if (!showDistAssets) {
    host = '//localhost:8002';
  }

  return (
    <html>
      <head>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {showDistAssets ?
          <link rel="stylesheet" type="text/css" href="/assets/bundle.css" />
        : null}

        <title>JavaScript Architecture, Implementation, and Training by Matt Lo</title>

      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: body}} />
        <script src={`${host}/assets/bundle.js`}></script>
      </body>
    </html>
  );
}

Layout.propTypes = {
  body: React.PropTypes.string
};
