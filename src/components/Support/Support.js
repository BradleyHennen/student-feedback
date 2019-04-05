import React, { Component } from 'react';
import Review from '../Review/Review';
import Header from '../Header/Header'

class Support extends Component {

    nextPageLoad = () => {
        this.props.history.push('/comments')
    }

    render() {
        return (
            <section>
                <Header />
                <h1 className="App-title">How well are you being suppported?</h1>
                <input
                    type="number"
                    placeholder="Support?"
                />
                <button onClick={this.nextPageLoad}>NEXT</button>
                <Review />
            </section>
        );
    }
}

export default Support;