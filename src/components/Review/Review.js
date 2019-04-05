import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {
    render() {
        return (
            <section>
                <h1 className="App-title">Review Your Feedback</h1>
                <ul>
                    <li>Feelings: {this.props.reduxState.reviewReducer.feeling}</li>
                    <li>Undstanding: {this.props.reduxState.reviewReducer.understand}</li>
                    <li>Supported: {this.props.reduxState.reviewReducer.supported}</li>
                    <li>Comments: {this.props.reduxState.reviewReducer.comment}</li>
                </ul>
                <button>Complete</button>
            </section>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Review);