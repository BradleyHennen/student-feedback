import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  header: {
    background: '#033076',
    height: 90,
    padding: 20,
  },
  text: {
    color: 'white',
  }
})

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
        <header className={classes.header}>
          <Typography className={classes.text} variant="h3" gutterBottom>Feedback!</Typography>
          <Typography className={classes.text} variant="h5" gutterBottom><i>Don't forget it!</i></Typography>
        </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);