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
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flagged</th>
                            <th>Delete</th>
                            <th>Flag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.getFeedback.map(feedback => {
                            return (
                                <AdminListItem
                                    feedback={feedback}
                                    deleteFeedback={this.props.deleteFeedback}
                                    flagFeedback={this.props.flagFeedback}
                                    key={feedback.id}
                                />
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