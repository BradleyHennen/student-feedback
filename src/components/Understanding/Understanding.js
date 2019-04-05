import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header'

class Understanding extends Component {

    state = {
        understanding: 0,
    }

    nextPageLoad = () => {
        const action = {type: 'ADD_UNDERSTANDING', payload: this.state.understanding}
        console.log('Action', action);
        
        this.props.dispatch(action);
        this.props.history.push('/support')
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
        })
    }

    render() {
        return (
            <section>
                <Header />
                <h1 className="App-title">How well are you understanding the content?</h1>
                <input
                    type="number"
                    placeholder="Understanding"
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
  
  export default connect(mapReduxStateToProps)(Understanding);