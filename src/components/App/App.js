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
import Admin from '../Admin/Admin';

class App extends Component {

  //Posts feedback to the database. Uses reducer data to fill object. 
  addFeedback = () => {
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
      console.log('Added feedback');
    }).catch((error) => {
      console.log('Error posting new review');
      alert('Error posting new review');
    })
  }

  //Gets feedback from the database to display on the admin page.
  getFeedback = () => {
    Axios({
      method: 'GET',
      url: '/completed',
    }).then((response) => {
      console.log('Getting feedback', response.data);
      const action = {type: 'GET_FEEDBACK', payload: response.data};
      this.props.dispatch(action);
    }).catch((error) => {
      console.log('Error getting feedback', error);
      alert('Error getting feedback')
    })
  }

  //Deletes feedback on admin page based on database id
  deleteFeedback = (id) => {
    Axios({
      method: 'DELETE',
      url: `/completed/${id}`
    }).then((response) => {
      this.getFeedback();
    }).catch((error) => {
      console.log('Something went wrong deleteing feedback', error);
      alert(`Couldn't delete feedback`);
    })
  }

  //Updates flag column in database via admin page
  flagFeedback = (id) => {
    Axios({
      method: 'PUT',
      url: `/completed/${id}`
    }).then((response) => {
      this.getFeedback();
    }).catch((error) => {
      console.log('Something went wrong flagging feedback', error);
      alert('Error flagging feedback');
    })
  }

  componentDidMount = () => {
    this.getFeedback();
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
          	path='/admin'
          	render={(props) => <Admin {...props}
          	deleteFeedback={this.deleteFeedback} 
            flagFeedback={this.flagFeedback}/>}
          />
          <Route
          	path='/review'
          	render={(props) => <Review {...props}
          	addFeedback={this.addFeedback} />}
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