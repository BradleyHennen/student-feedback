import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = theme => ({
    button: {
        margin: 20,
    },
    paper: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
  })

class CompletedPage extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'ADD_FEELING', payload: []});
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: []});
        this.props.dispatch({type: 'ADD_SUPPORT', payload: []});
        this.props.dispatch({type: 'ADD_COMMENT', payload: []});
        this.props.dispatch({type: 'FLIP_BUTTON', payload: true});
        this.props.history.push('/');
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>Feedback Submitted</Typography>
                <div>
                    <Typography variant="h4" gutterBottom>Thank You!</Typography>
                    <Button onClick={this.handleClick} 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}>
                        Leave New Feedback
                    </Button>
                </div>
            </Paper>
        );
    }
}

CompletedPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(withStyles(styles)(CompletedPage));