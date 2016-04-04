import './ContactModal.scss';
import React from 'react';
import BaseModal from '../BaseModal/BaseModal';
import {connect} from 'react-redux';
import Chat from '../Chat/Chat';

class ContactModal extends React.Component {
  static propTypes = {
    contactModal: React.PropTypes.object.isRequired
  };

  initChatHandler() {
    // @TODO load data from local storage
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

        <Chat />
      </BaseModal>
    );
  }
}

export default connect((state) => ({
  contactModal: state.modalReducer
}))(ContactModal);
