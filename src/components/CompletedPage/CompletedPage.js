import React, { Component } from 'react';
import { connect } from 'react-redux';

class CompletedPage extends Component {

    handleClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <section>
                <h1>Feedback Submitted</h1>
                <div>
                    <h2>Thank You!</h2>
                    <button onClick={this.handleClick}>Leave New Feedback</button>
                </div>
            </section>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(CompletedPage);