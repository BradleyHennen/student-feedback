import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header'

class Feeling extends Component {

    state = {
        feeling: 0,
    }

    nextPageLoad = () => {
        const action = {type: 'ADD_FEELING', payload: this.state.feeling}
        console.log('Action', action);
        
        this.props.dispatch(action);
        this.props.history.push('/understanding');

    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
        })
    }

    render() {
        return (
            <section>
                <Header />
                <h1 className="App-title">How are you feeling today?</h1>
                <input
                    type="number"
                    placeholder="Feeling"
                    value={this.state.feeling}
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
  
  export default connect(mapReduxStateToProps)(Feeling);