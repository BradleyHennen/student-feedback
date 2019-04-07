import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {

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
    console.log('this.props.reduxState.reviewReducer.....',this.props.reduxState.reviewReducer);

        return (
            <section>
                <h1 className="App-title">Review Your Feedback</h1>
                <ul>
                    <li>Feelings: {this.props.reduxState.feelingsReducer}</li>
                    <li>Undstanding: {this.props.reduxState.understandingReducer}</li>
                    <li>Supported: {this.props.reduxState.supportedReducer}</li>
                    <li>Comments: {this.props.reduxState.commentsReducer}</li>
                </ul>
                {this.flip()}
            </section>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Review);