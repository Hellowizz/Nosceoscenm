import React from 'react';
import PropTypes from "prop-types";
import './fiche.css';

const styles = {
  root: {
    width: '100%',
    boxShadow: 'none'
  },
  align: {
    display: 'flex',
    alignItems: 'center'
  }
};

export default class SimpleExpansionPanel extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.any
  };

  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = { expanded: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event, expanded) {
    this.setState({ expanded : expanded });
    console.log('expanded : ' + expanded);
  }

  render()  {
    return (
      <div className="fiche-container" styles={styles.root}>

      </div>
    );
  }
}