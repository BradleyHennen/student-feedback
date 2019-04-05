import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Feeling}/>
          <Route path='/understanding' component={Understanding}/>
          <Route path='/support' component={Support}/>
          <Route path='/comments' component={Comments}/>
        </div>
        
      </Router>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);