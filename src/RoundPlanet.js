import React from 'react';
import PropTypes from "prop-types";
import './roundPlanet.css';

export default class RoundPlanet extends React.Component {
  static propTypes = {
    textAround: PropTypes.string,
    image: PropTypes.any
  };

  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = { info: false };
  }

  render()  {
    return (
	    <div class="round-turning-invert" />
    );
  }
}