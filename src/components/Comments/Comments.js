import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header'

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: 20,
    },
})

class Comment extends Component {

    state = {
        comment: '',
    }

    //Adds users comments to reducer and changes page on click
    nextPageLoad = () => {
        const action = { type: 'ADD_COMMENT', payload: this.state.comment };
        this.flip();
        console.log('Action', action);

        this.props.dispatch(action);
        this.props.history.push('/review')
    }

    //Flips boolean to trigger button flip on review page
    flip = () => {
        const action = { type: 'FLIP_BUTTON', payload: false };
        this.props.dispatch(action);
    }

    //Updates state to reflect users input
    handleChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <section>
                <Header />
                <Paper>
                    <Typography variant="h4" gutterBottom>Any comments you want to leave?</Typography>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Comment"
                        multiline
                        rowsMax="4"
                        value={this.state.comment}
                        onChange={this.handleChange}
                        className={classes.textField}
                        margin="normal"
                    />
                    <Button
                        onClick={this.nextPageLoad}
                        variant="contained"
                        color="primary"
                        className={classes.button}>
                        NEXT
                </Button>
                </Paper>
                <Review />
            </section>
        );
    }
}

Comment.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Comment));