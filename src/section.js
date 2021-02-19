import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

import './section.css'

const CustomAvatar = withStyles({
  root: {
    width: '100px', 
    height: '100px', 
    transition: '.5s'
  }
})(Avatar);

const CustomExpansionPanel = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    color: 'white', 
    
    background: 'none',
    padding: '10px 5px 10px 5px',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  expanded: {
    fontFamily: 'Era Casual',
  },
})(ExpansionPanel);

const CustomExpansionPanelSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 108,
    '&$expanded': {
      minHeight: 108,
      display: 'flex',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    '&$expanded': {
      margin: '12px 0',
      display: 'flex',
    },
  },
  expanded: {
    display: 'flex',
  },
})(ExpansionPanelSummary);

const CustomExpansionPanelDetails = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
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
    this.state = { expanded: false, hover: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick (event, expanded) {
    this.setState({ expanded : expanded });
    console.log('expanded : ' + expanded);
  }

  handleMouseEnter (event) {
    this.setState({ hover : true });
  }

  handleMouseLeave (event) {
    this.setState({ hover : false });
  }

  render()  {
    return (
      <div className="section-container" styles={{ display: 'flex' }}>
        <CustomExpansionPanel onChange={this.handleClick} style= {{ border : (this.state.expanded ? '1px solid rgba(255, 255, 255, .6)' : '1px solid rgba(255, 255, 255, 0)' ) }}>
          <CustomExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
              <CustomAvatar 
                alt="avatar" 
                src={this.props.image} 
                style={{ boxShadow: this.state.hover ? '0 0 2px #e2eff0, 0 0 8px #e2eff0, 0 0 18px #808080, 0 0 22px #808080, 0 0 33px #808080' : 'none' }} 
              />
              <Typography style={{ marginLeft: '30px', fontSize: '20px', fontFamily: 'Era Casual' }}>
                {this.props.name}
              </Typography>
          </CustomExpansionPanelSummary>
          <CustomExpansionPanelDetails style={{ opacity: this.state.expanded ? '1' : '0', transition: '.5s' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}><img alt="chibi" src={this.props.chibi} style={{ width: '250px' }} /></div>
            <Typography style={{ padding: '10px', textAlign: 'center', overflow: 'hidden' }}>
              {this.props.description}
            </Typography>
          </CustomExpansionPanelDetails>
        </CustomExpansionPanel>
      </div>
    );
  }
}