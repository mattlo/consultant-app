import './Chat.scss';
import React from 'react';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  send(from, message) {

  }

  receive(message) {

  }

  render() {
    return (
      <div className="chat">
        Chat Client!
      </div>
    );
  }
}
