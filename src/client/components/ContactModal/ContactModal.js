import './ContactModal.scss';
import React from 'react';
import BaseModal from '../BaseModal/BaseModal';
import {connect} from 'react-redux';
import Chat from '../Chat/Chat';
import shortid from 'shortid';

class ContactModal extends React.Component {
  static propTypes = {
    contactModal: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    this.setState({
      name: '',
      token: shortid.generate(),
      showChat: false
    });
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleChatInit = (e) => {
    e.preventDefault();

    if (this.state.name.length < 2) {
      alert('Please have a name greater than 2 characters');
      return;
    }

    this.setState({
      showChat: true
    });
  };

  renderNameCapture() {
    return (
      <div className="name-prompt">
        <form onSubmit={this.handleChatInit}>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <div className="form-group">
                <label>Enter your name:</label>
                <input
                  type="text"
                  onChange={this.handleName}
                  placeholder="Enter name"
                  className="form-control"
                />
                <small className="text-muted disclaimer">
                  Your name and messages are encrypted and deleted after
                  your session ends.
                </small>
              </div>
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Lets start the conversation
          </button>
        </form>
      </div>
    );
  }

  renderChatClient() {
    let initValue = 'Hey Matt.';

    if (this.props.contactModal.context) {
      initValue += ` I'm interested in ${this.props.contactModal.context}`;
    }

    return (
      <Chat
        token={this.state.token}
        name={this.state.name}
        initValue={initValue}
      />
    );
  }

  render() {
    const suffix = this.props.contactModal.context ? `: ${this.props.contactModal.context}` : '';
    const mailSubject = encodeURIComponent(
      `JS Architect${suffix}`
    );

    const mailBody = encodeURIComponent(
      `Hey Matt,\n\n\n`
    ).replace(/%0A/g, '%0D%0A'); // (carriage return + line feed)

    return (
      <BaseModal className="contact-modal">
        <h3>Contact Matt</h3>

        <div className="row contact-methods">
          <div className="col-sm-6">

            <div className="contact-method">
              <div className="indicator">
                <i className="fa fa-at" />
              </div>
              <a
                className="contents"
                href={`mailto:mlo@mattlo.io?subject=${mailSubject}&body=${mailBody}`}
              >
                mlo@mattlo.io
              </a>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="contact-method">
              <div className="indicator">
                <i className="fa fa-phone" />
              </div>
              <span className="contents phone-number" />
            </div>
          </div>
        </div>

        <h3>Live Chat with Matt</h3>

        {this.state.showChat ? this.renderChatClient() : this.renderNameCapture()}
      </BaseModal>
    );
  }
}

export default connect((state) => ({
  contactModal: state.modalReducer
}))(ContactModal);
