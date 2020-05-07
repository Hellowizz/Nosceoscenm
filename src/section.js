import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

import './section.css'

const CustomExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    padding: '10px 5px 10px 5px',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(ExpansionPanel);

const CustomExpansionPanelSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 108,
    '&$expanded': {
      minHeight: 108,
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(ExpansionPanelSummary);

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

const CustomExpansionPanelDetails = withStyles({
  root: {
    display: 'flex',
    alignItem: 'center'
  },
})(ExpansionPanelDetails);

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
      <div className="section-container" styles={styles.root}>
        <CustomExpansionPanel onChange={this.handleClick} >
          <CustomExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header" >
              <Avatar alt="avatar" src={this.props.image} 
                 style={{ width: '80px', height: '80px', border: '3px solid #26262a', opacity: this.state.expanded ? '0' : '1', transition: '.5s'}}
              />
              <Typography style={{ marginLeft: '30px', fontWeight: '600', fontSize: '20px' }}>
                {this.props.name}
              </Typography>
          </CustomExpansionPanelSummary>
          <CustomExpansionPanelDetails style={{ opacity: this.state.expanded ? '1' : '0', transition: '.5s' }}>
            <img alt="chibi" src={this.props.chibi} style={{ width: '250px' }} />
            <Typography style={{ marginLeft: '15px' }}>
              {this.props.description}
            </Typography>
          </CustomExpansionPanelDetails>
        </CustomExpansionPanel>
      </div>
    );
  }
}