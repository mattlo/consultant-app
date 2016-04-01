import React from 'react';
import BaseModal from '../BaseModal/BaseModal';
import {connect} from 'react-redux';

class ContactModal extends React.Component {
  static propTypes = {
    contactModal: React.PropTypes.object.isRequired
  };

  initChatHandler() {

  }

  render() {
    return (
      <BaseModal>
        Contact Matt at mlo@mattlo.io {this.props.contactModal.context}
      </BaseModal>
    );
  }
}

export default connect((state) => ({
  contactModal: state.modalReducer
}))(ContactModal);
