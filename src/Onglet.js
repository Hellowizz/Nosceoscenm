import React from 'react';
import PropTypes from "prop-types";

export default class Onglet extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    isOpen: PropTypes.boolean,
  };
}