import './PersistentHeader.scss';
import React from 'react';
import classnames from 'classnames';

export default class PersistentHeader extends React.Component {
  static headerScrollTrigger = 150;

  constructor(props) {
    super(props);

    this.rotationText = [
      'Architecture',
      'Engineering',
      'Training',
      'Leadership'
    ];

    this.state = {
      rotationIndex: 0,
      headerState: this.activateHeader()
    };
  }

  componentDidMount() {
    this.timer = this.runRotationTimer();
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll = () => {
    if (this.activateHeader() && !this.state.headerActive) {
      this.setState({headerActive: true});
    } else if (!this.activateHeader() && this.state.headerActive) {
      this.setState({headerActive: false});
    }
  };

  activateHeader() {
    return window.scrollY >= PersistentHeader.headerScrollTrigger;
  }

  runRotationTimer() {
    this.timer = setTimeout(() => {
      this.runRotationTimer();
      this.updateRotationText();
    }, 1500);
  }

  updateRotationText() {
    let rotationIndex = this.state.rotationIndex + 1;

    // max validation override
    if (this.state.rotationIndex + 1 >= this.rotationText.length) {
      rotationIndex = 0;
    }

    this.setState({
      rotationIndex
    });
  }

  render() {
    return (
      <div
        className={classnames('persistent-header', {
          active: this.state.headerActive
        })}
      >
        <div className="container">
          <div className="roi-text">
            <i className="icon-javascript-alt" />
            <span className="text-rotation-container">
              {this.rotationText.map((text, index) => (
                <span
                  key={index}
                  className={classnames('text-rotation', {
                    active: index === this.state.rotationIndex
                  })}
                >
                {text}
              </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

