import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import CompletedPage from '../CompletedPage/CompletedPage';

class App extends Component {

  addReview = () => {
    Axios({
      method: 'POST',
      url: '/completed',
      data: {
        feeling: this.props.reduxState.feelingsReducer,
        understanding: this.props.reduxState.understandingReducer,
        support: this.props.reduxState.supportedReducer,
        comments: this.props.reduxState.commentsReducer,
      },
    }).then((response) => {
      console.log('Added review');
    }).catch((error) => {
      console.log('Error posting new review');
      alert('Error posting new review');
    })
  }

  getFeedback = () => {
    Axios({
      method: 'GET',
      url: '/completed',
    }).then((response) => {
      console.log('Getting feedback', response);
      //add function
    }).catch((error) => {
      console.log('Error getting feedback', error);
      alert('Error getting feedback')
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Feeling}/>
          <Route path='/understanding' component={Understanding}/>
          <Route path='/support' component={Support}/>
          <Route path='/comment' component={Comments}/>
          <Route path='/completed-page' component={CompletedPage}/>
          <Route
          	exact path='/review'
          	render={(props) => <Review {...props}
          	addReview={this.addReview} />}
          />

        </div>
        
      </Router>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);