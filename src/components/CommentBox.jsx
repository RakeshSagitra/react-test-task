import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    '&:focus': {
      outline: 0,
      border: 0
    },
  }
});

const CommentBox = ({classes, handleComment, comment, onChange}) => {
  return (
    <form className={classes.container} autoComplete="off" onSubmit={handleComment}>
      <TextField
        id="comment-input"
        placeholder="Write a response and then press enter..."
        margin="normal"
        variant="outlined"
        autoFocus
        required
        fullWidth
        value={comment}
        onChange={onChange}
        className={classes.textField}
      />
    </form>  
  );
}

CommentBox.propTypes = {
  classes: PropTypes.object.isRequired,
  handleComment: PropTypes.func.isRequired,
  comment: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(CommentBox);