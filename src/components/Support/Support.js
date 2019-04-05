import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header'

class Support extends Component {

    state = {
        support: 0,
    }

    nextPageLoad = () => {
        const action = {type: 'ADD_SUPPORT', payload: this.state.support}
        console.log('Action', action);
        
        this.props.dispatch(action);
        this.props.history.push('/comment')
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value,
        })
    }

    render() {
        return (
            <section>
                <Header />
                <h1 className="App-title">How well are you being suppported?</h1>
                <input
                    type="number"
                    placeholder="Support"
                    value={this.state.support}
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
  
  export default connect(mapReduxStateToProps)(Support);