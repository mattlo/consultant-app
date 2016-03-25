import './PersistentHeader.scss';
import React from 'react';
import classnames from 'classnames';

export default class PersistentHeader extends React.Component {
  constructor(props) {
    super(props);

    this.rotationText = [
      'Architecture',
      'Engineering',
      'Training',
      'Leadership'
    ];

    this.state = {
      rotationIndex: 0
    };
  }

  componentDidMount() {
    this.runRotationTimer();
  }

  runRotationTimer() {
    setTimeout(() => {
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
      <div className="persistent-header">
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

