import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header'

const styles = {
    checked: {},
    button: {
        margin: 20,
    },
    paper: {
        height: 140,
        width: 100,
    },
  };

class Support extends Component {

    state = {
        selectedValue: "",
    }

    nextPageLoad = () => {
        let number = Number(this.state.selectedValue)
        const action = {type: 'ADD_SUPPORT', payload: number}
        this.props.dispatch(action);
        this.props.history.push('/comment')
    }

    handleChange = (event) => {
        this.setState({
            selectedValue: event.target.value,
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <section>
                <Header />
                    <Paper>
                    <Typography variant="h4" gutterBottom>
                        How well are you being supported?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    </Typography>
                    <Radio
                        checked={this.state.selectedValue === "1"}
                        onChange={this.handleChange}
                        value="1"
                        name="radio-button-1"
                    />
                    <span>1</span>
                    <Radio
                        checked={this.state.selectedValue === "2"}
                        onChange={this.handleChange}
                        value="2"
                        name="radio-button-2"
                    />
                    <span>2</span>
                    <Radio
                        checked={this.state.selectedValue === "3"}
                        onChange={this.handleChange}
                        value="3"
                        name="radio-button-3"
                    />
                    <span>3</span>
                    <Radio
                        checked={this.state.selectedValue === "4"}
                        onChange={this.handleChange}
                        value="4"
                        name="radio-button-4"
                    />
                    <span>4</span>
                    <Radio
                        checked={this.state.selectedValue === "5"}
                        onChange={this.handleChange}
                        value="5"
                        name="radio-button-5"
                    />
                    <span>5</span>
                    <Button onClick={this.nextPageLoad} variant="contained" color="primary" className={classes.button}>
                        NEXT
                    </Button>
                    </Paper>
                <Review />
            </section>
        );
    }
}

Support.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(withStyles(styles)(Support));