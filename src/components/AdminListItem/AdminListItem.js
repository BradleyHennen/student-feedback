import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
      color: theme.palette.text.primary,
    },
    icon: {
      margin: theme.spacing.unit,
      fontSize: 32,
    },
  });
  
class Admin extends Component {
   

    handleClickDelete = (event) => {    
        this.props.deleteFeedback(event.target.value);
    }

    handleClickFlag = (event) => {
        this.props.flagFeedback(event.target.value);
       
    }

    flipFlagButton = () => {
        console.log('Flagged', this.props.feedback.flagged);
        
        if (this.props.feedback.flagged === true) {
            return  (<button 
                onClick={this.handleClickFlag}
                value={this.props.feedback.id}>
                Clear Flag
            </button>)
        } else if (this.props.feedback.flagged === false) {
            return  (<button 
                onClick={this.handleClickFlag}
                value={this.props.feedback.id}>
                Mark Flagged
            </button>)
        }
    }

    flagRender = () => {
        if (this.props.feedback.flagged === true) {
        return ('Attention Needed');
        } else {
            return ('')
        }
    }

    render() {
        return (
                <tr>
                    <td>{this.props.feedback.feeling}</td>
                    <td>{this.props.feedback.understanding}</td>
                    <td>{this.props.feedback.support}</td>
                    <td>{this.props.feedback.comments}</td>
                    <td>{this.flagRender()}</td>
                    <td>
                    <button
                            onClick={this.handleClickDelete}
                            value={this.props.feedback.id} 
                            >Delete</button>
                        
                    </td>
                    <td>
                    {this.flipFlagButton()}
                    </td>
                </tr>  
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(withStyles(styles)(Admin));