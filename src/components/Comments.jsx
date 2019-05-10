import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import red from '@material-ui/core/colors/red';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    width: '100%',
    margin: '8px',
    border: '1px grey solid', 
  },
  avatar: {
    backgroundColor: red[500],
  },
  comment: {
    fontSize: 20,
    fontWeight: 400,
  },
});

const Comments = ({classes, data}) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            alt={data.user.name}
            src={data.user.profilePic}
            className={classes.avatar}>
            {data.user.name[0]}
          </Avatar>
        }
        title={data.user.name}
      />
      
      <CardContent>
        <Typography 
          component="p"
          className={classes.comment}
        >
          {data.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(Comments);
