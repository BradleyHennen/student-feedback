import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header'

class Comment extends Component {

    state = {
        comment: '',
    }

    nextPageLoad = () => {
        const action = {type: 'ADD_COMMENT', payload: this.state.comment};
        this.flip();
        console.log('Action', action);
        
        this.props.dispatch(action);
        this.props.history.push('/review')
    }

    flip = () => {
        const action = {type: 'FLIP_BUTTON', payload: false};
        this.props.dispatch(action);
    }

    handleChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }

    render() {
        return (
            <section>
                <Header />
                <h1 className="App-title">Any comments you want to leave?</h1>
                <input
                    type="text"
                    placeholder="Comments"
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <button onClick={this.nextPageLoad}>NEXT</button>
                <Review />
            </section>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Comment);