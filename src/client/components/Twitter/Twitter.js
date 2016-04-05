import React from 'react';
import Promise from 'bluebird';

export default class Twitter extends React.Component {
  static propTypes = {
    screenname: React.PropTypes.string,
    id: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      twitterHandler: props.screenname,
      refresh: false
    };
  }

  componentWillMount() {
    this.resolveTwitterResource()
      .then(() => this.refreshTwitterFeed(this.props))
      .then(() => this.setState({loaded: true}))
      .catch((e) => {
        console.error('twitter widget failed to load', e);
      });
  }

  componentWillReceiveProps(props) {
    this.setState({
      twitterHandler: props.profile.twitterHandler,
      refresh: true
    });

    this.refreshTwitterFeed(props);
  }

  refreshTwitterFeed(props) {
    // remove all children
    while (this.refs.twitterFeed.firstChild) {
      this.refs.twitterFeed.removeChild(this.refs.twitterFeed.firstChild);
    }

    return window.twttr.widgets.createTimeline(
      this.props.id,
      this.refs.twitterFeed,
      {
        tweetLimit: 2,
        width: 'auto',
        conversation: 'none',
        cards: 'hidden',
        screenName: (props.screenname).replace('@', '')
      }
    );
  }

  resolveTwitterResource() {
    return new Promise((resolve, reject) => {
      if (window.twttr && window.twttr.init) {
        console.debug('twitter resource loaded already');
        return resolve(true);
      }

      // imported code from https://dev.twitter.com/web/javascript/loading
      return ((d, s, id) => {
        let js;
        const fjs = d.getElementsByTagName(s)[0];
        const t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);

        js.onload = () => {
          console.debug('twitter client loaded');
          resolve(true);
        };

        js.onerror = (e) => {
          reject(e);
        };

        t._e = [];
        t.ready = (f) => {
          t._e.push(f);
        };

        return t;
      })(document, 'script', 'twitter-wjs');
    });
  }

  render() {
    return (
      <div className="twitter-container" ref="twitterFeed" />
    );
  }
}
