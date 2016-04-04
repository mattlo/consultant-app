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

  static POLL_INTERVAL = 2000;

  componentWillMount() {
    this.setState({
      textbox: ''
    });
  }

  componentDidMount() {
    if (this.canPoll()) {
      this.poll();
    }
  }

  componentDidUpdate() {
    if (this.canPoll()) {
      this.poll();
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

    if (this.state.textbox.length === 0) {
      alert('You must have a message to send!');
      return;
    }

    this.send(this.state.textbox);

    // reset input box state
    this.setState({
      textbox: ''
    });
  };

  renderMessages() {
    return (
      <div className="chat-messages">
        {this.props.messages.map((m, index) => (
          <div key={index}>
            {m.name} - {m.message}
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
          <input
            type="text"
            className="form-control form-control-sm"
            value={this.state.textbox}
            onChange={this.handleTextboxChange}
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
        {this.renderMessages()}
        {this.renderTextBox()}
      </div>
    );
  }
}

export default connect((state, props) => ({
  messages: state.messageReducer,
  name: props.name,
  token: props.token
}))(Chat);

