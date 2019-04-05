import React, { Component } from 'react';
import Review from '../Review/Review';
import Header from '../Header/Header'

class Support extends Component {

    nextPageLoad = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <section>
                <Header />
                <h1 className="App-title">Any comments you want to leave?</h1>
                <input
                    type="text"
                    placeholder="Comments"
                />
                <button onClick={this.nextPageLoad}>NEXT</button>
                <Review />
            </section>
        );
    }
}

export default Support;