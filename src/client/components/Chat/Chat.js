import './Chat.scss';
import React from 'react';
import {store} from '../../data/index';
import {connect} from 'react-redux';
import {getMessagesAction, sendMessageAction} from '../../data/contactModal';
import Textarea from 'react-textarea-autosize';

class Chat extends React.Component {
  static propTypes = {
    token: React.PropTypes.string,
    messages: React.PropTypes.array,
    name: React.PropTypes.string,
    initValue: React.PropTypes.string
  };

  static POLL_INTERVAL = 2000;

  componentWillMount() {
    this.setState({
      textbox: this.props.initValue
    });
  }

  componentDidMount() {
    this.refs.chattextbox.focus();

    if (this.canPoll()) {
      this.poll();
    }
  }

  componentDidUpdate(props) {
    if (this.canPoll()) {
      this.poll();
    }

    if (props.messages.length < this.props.messages.length) {
      this.refs.chatMessages.scrollTop = Number.MAX_SAFE_INTEGER;
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearTimeout(this.interval);
    }
  }

  poll() {
    this.interval = setTimeout(() => {
      this.receive(this.props.token);
      this.poll();
    }, Chat.POLL_INTERVAL);
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

  handleTextboxChange = (e) => {
    this.setState({
      textbox: e.target.value
    });
  };

  handleButtonSend = (e) => {
    e.preventDefault();

    if (this.state.textbox.trim().length === 0) {
      alert('You must have a message to send!');
      return;
    }

    this.send(this.state.textbox);

    // reset input box state
    this.setState({
      textbox: ''
    });
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.stopPropagation();
      this.handleButtonSend(e);
    }
  };

  renderMessages() {
    return (
      <div className="chat-messages" ref="chatMessages">
        {this.props.messages.map((m, index) => (
          <div className="message" key={index}>
            {!m.user ? <strong>{m.name}</strong> : m.name} - {m.message}
          </div>
        ))}
      </div>
    );
  }

  renderTextBox() {
    return (
      <form
        onSubmit={this.handleButtonSend}
        className="chat-textbox"
      >
        <div className="textbox">
          <Textarea
            className="form-control form-control-sm"
            value={this.state.textbox}
            placeholder="Enter a message..."
            onChange={this.handleTextboxChange}
            onKeyDown={this.handleKeyDown}
            ref="chattextbox"
          />
        </div>
        <div className="send">
          <button
            type="submit"
            className="btn btn-primary btn-sm"
          >
            Send
          </button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="chat">
        {this.props.messages.length > 0 ? this.renderMessages() : undefined}
        {this.renderTextBox()}
      </div>
    );
  }
}

export default connect((state, props) => ({
  messages: state.messageReducer,
  name: props.name,
  token: props.token,
  initValue: props.initValue
}))(Chat);

