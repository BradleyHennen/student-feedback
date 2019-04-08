import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 2,
    },
    button: {
        margin: 20,
    },
});

class Review extends Component {
    state = {
        spacing: '16',
    };

    //Flips button to be functional when review is complete
    flip = () => {
        console.log('flip', this.props.reduxState.reviewComplete);
        if (this.props.reduxState.reviewComplete === true) {
            return <Button disabled variant="contained" color="primary">Incomplete</Button>;
        } else if (this.props.reduxState.reviewComplete === false) {
            return <Button
                onClick={this.addFeedback}
                variant="contained"
                color="primary">
                Complete
                    </Button>;
        }
    }

    //Adds feedback to database and changes view
    addFeedback = () => {
        this.props.history.push('/completed-page');
        this.props.addFeedback();
        window.location.reload()
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={24}
                >
                    <Grid item xs={12}>
                        <Paper className={classes.root}>
                            <Typography variant="h4" gutterBottom>
                                Review Your Feedback:
                            </Typography>
                            <List>
                                <ListItem>Feelings: {this.props.reduxState.feelingsReducer}</ListItem>
                                <ListItem>Undstanding: {this.props.reduxState.understandingReducer}</ListItem>
                                <ListItem>Supported: {this.props.reduxState.supportedReducer}</ListItem>
                                <ListItem>Comments: {this.props.reduxState.commentsReducer}</ListItem>
                                {this.flip()}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
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