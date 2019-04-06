import React, { Component } from 'react';
import { connect } from 'react-redux';


class Admin extends Component {

    handleClick = (event) => {
        let action = {type: 'DELETE_FEEDBACK', payload: event.target.value};
        this.props.dispatch(action);
    }

    render() {

        return (
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button 
                    onClick={this.handleClick}
                    value={this.props.feedback.id}
                >Delete</button></td>
            </tr>
                  
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Admin);