import './BaseModal.scss';
import React from 'react';
import {store} from '../../data/index';
import {connect} from 'react-redux';

export default class BaseModal extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    showContactModal: React.PropTypes.object
  };

  static Y_PADDING = 50;

  componentWillMount() {
    this.resetState();
  }

  componentWillReceiveProps(props) {
    if (props.showContactModal) {
      this.setState({yPosition: window.scrollY + BaseModal.Y_PADDING});
    }
  }

  componentWillUnmount() {
    this.resetState();
  }

  resetState() {
    this.setState({
      yPosition: BaseModal.Y_PADDING
    });
  }

  handleClose = () => {
    store.dispatch({type: 'HIDE_MODAL'});
  };

  handleShadowClick = (e) => {
    switch (e.target.className) {
      case 'base-modal-shadow':
      case 'base-modal-layer':
      case 'base-modal-chrome':
        store.dispatch({type: 'HIDE_MODAL'});
        break;
      default: return;
    }
  };

  render() {
    return (
      <div
        className="base-modal"
        onClick={this.handleShadowClick}
        style={{display: this.props.showContactModal.visibility ? 'block' : undefined}}
      >
        <div className="base-modal-shadow" />
        <div className="base-modal-layer" style={{top: this.state.yPosition}}>
          <div className="base-modal-chrome">
            <div className="base-modal-contents">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state, props) => ({
  showContactModal: state.modalReducer,
  children: props.children
}))(BaseModal);
