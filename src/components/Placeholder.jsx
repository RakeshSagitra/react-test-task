import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SmsIcon from '@material-ui/icons/Sms';

const styles = theme => ({
  button: {
    margin: 8,
    height: 56,
  },
  root: {
    justifyContent: 'left' 
  },
  contained: {
    color: '#83838c',
    background: "#fff",
    fontSize: 12,
    textTransform: 'initial',
    '&:hover': {
      background: '#fff',
    },
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const Placeholder = ({classes, onClick}) => {
  return (
    <div>
      <Button classes={{root: classes.root, contained: classes.contained}} 
        variant="contained" 
        fullWidth
        disableRipple
        disableFocusRipple
        className={classes.button}
        onClick={onClick}
      >
        <SmsIcon className={classes.leftIcon} />
        Write a response here...
      </Button>
    </div>
  );
}

Placeholder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Placeholder);