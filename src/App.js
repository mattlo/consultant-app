import React from 'react';
import './App.css';
import YouTubeVideo from './YouTubeVideo/YouTubeVideo';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>
          Matt Lo
        </h1>
        <h2>
          CEO and Founder of <a href="https://getchipbot.com">ChipBot, Inc.</a>
        </h2>

        <p>
          I'm an entrepreneur, marketer, software engineer, and product maker.
          {' '}
          <strong>I build companies that use cognitive intelligence to elevate others.</strong>
          {' '}
          <span>I also play poker and study Japanese.</span>
        </p>

        <YouTubeVideo
          src="https://youtu.be/AXNqYH0LOpk"
        />

        <br />
        <br />
        <br />

        <div>
          <a href="https://getchipbot.com" className="cb-logo">
            <img
              alt="ChipBot, Inc."
              src="https://static.getchipbot.com/shared/images/logo/2019-05-13/svg/cb-full-logo-dark.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
