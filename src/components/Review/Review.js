import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        height: 140,
        width: 100,
        padding: theme.spacing.unit * 2,

    },
});

class Review extends Component {
    state = {
        spacing: '16',
    };

    flip = () => {
        console.log('flip', this.props.reduxState.reviewComplete);

        if (this.props.reduxState.reviewComplete === true) {
            return <button disabled>Incomplete</button>;
        } else if (this.props.reduxState.reviewComplete === false) {
            return <button onClick={this.addFeedback}>Complete</button>;
        }
    }

    addFeedback = () => {
        this.props.history.push('/completed-page');
        this.props.addFeedback();
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} spacing={24}  >
                <Grid item xs={12} >
                        <Paper>
                            <Typography variant="h4" gutterBottom>
                                Review Your Feedback:
                            </Typography>
                            <List>
                                <ListItem>Feelings: {this.props.reduxState.feelingsReducer}</ListItem>
                                <ListItem>Undstanding: {this.props.reduxState.understandingReducer}</ListItem>
                                <ListItem>Supported: {this.props.reduxState.supportedReducer}</ListItem>
                                <ListItem>Comments: {this.props.reduxState.commentsReducer}</ListItem>
                                <ListItem button>{this.flip()}</ListItem>
                            </List>
                        </Paper>
                </Grid>
            </Grid>
        );
    }
}

Review.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Review));