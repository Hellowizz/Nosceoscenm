import React from 'react';

import './section.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    // this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (event) {
    console.log('tututututuutututkihl');
  }

  render()  {
    return (
      <div className="footer-container" onClick={this.handleClick}>
          All designs and characters © Hellowizz
      </div>
    );
  }
}