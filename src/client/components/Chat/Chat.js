import './Chat.scss';
import React from 'react';
import {store} from '../../data/index';
import {connect} from 'react-redux';
import {getMessagesAction, sendMessageAction} from '../../data/contactModal';

class Chat extends React.Component {
  static propTypes = {
    token: React.PropTypes.string,
    messages: React.PropTypes.array,
    name: React.PropTypes.string
  };

  static POLL_INTERVAL = 1000;

  componentWillMount() {
    this.poll();
  }

  componentDidUpdate() {
    this.poll();
  }

  componentWillUnmount() {
    if (this.interval) {
      clearTimeout(this.interval);
    }
  }

  poll() {
    if (this.canPoll()) {
      console.info('starting chat poll');
      this.interval = setTimeout(() => {
        this.receive(this.props.token);
      }, Chat.POLL_INTERVAL);
    }
  }

  canPoll() {
    return this.props.name && this.props.token && !this.interval;
  }

  send(message) {
    store.dispatch(sendMessageAction({
      token: this.props.token,
      name: this.props.name,
      message
    }));
  }

  receive() {
    store.dispatch(getMessagesAction(this.props.token));
  }

  render() {
    return (
      <div className="chat">
        &nbsp;
      </div>
    );
  }
}

export default connect((state, props) => ({
  messages: state.messageReducer,
  name: props.name,
  token: props.token
}))(Chat);

