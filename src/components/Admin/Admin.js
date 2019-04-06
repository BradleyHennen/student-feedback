import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminListItem from '../AdminListItem/AdminListItem';

class Admin extends Component {

    render() {

        return (
            <section>
                <h1>Feedback Results!</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Feeling</td>
                            <td>Comprehension</td>
                            <td>Support</td>
                            <td>Comments</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.getFeedback.map(feedback => {
                            return (
                                <AdminListItem feedback={feedback} key={feedback.id}/>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Admin);