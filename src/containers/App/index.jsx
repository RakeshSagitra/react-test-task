import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CommentBox from '../../components/CommentBox';
import Comments from '../../components/Comments';
import Placeholder from '../../components/Placeholder';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 800,
  },
  fullWidth: {
    width: '100%',
  }
});

const user = {
  id: 'ac8a973a-7320-11e9-a923-1681be663d3e',
  name: 'Rakesh S',
  profilePic: '/images/1.jpg'
};

class App extends Component {
  state = {
    comments: [],
    comment: '',
    showCommentBox: false,
  }

  handleComment = (event) => {
    event.preventDefault()
    if (!this.state.comment) return
    this.setState(prevState => ({
      comments: [{comment: prevState.comment, user}, ...prevState.comments],
      comment: '',
    }))
    this.toggleTextBox()
  }

  onChange = (event) => {
    const comment = event.target.value
    this.setState({comment})
  }

  toggleTextBox = () => {
    this.setState(prevState => ({showCommentBox: !prevState.showCommentBox}))
  }

  render() {
    const {comment, comments, showCommentBox} = this.state;
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.paper}>
          <Grid container spacing={16}>
            <Grid className={classes.fullWidth}>
              { !showCommentBox ?
              <Placeholder onClick={this.toggleTextBox}/> :
              <CommentBox 
                handleComment={this.handleComment}
                comment={comment}
                onChange={this.onChange} />}
              {comments && comments.map((comment, index) => <Comments key={index} data={comment}/>)}  
            </Grid>
          </Grid>
        </div>
      </div>    
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);