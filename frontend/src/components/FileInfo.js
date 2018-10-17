import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    margin: '0 50px',
  },
};

function FileInfo(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h5'>
          Name: <strong>{props.file ? props.file.name : ''}</strong>
        </Typography>
        <Typography variant='h5'>
          Type: <strong>{props.file ? props.file.type : ''}</strong>
        </Typography>
        <Typography variant='h5'>
          Size: <strong>{props.file ? props.file.size : ''}</strong> bytes
        </Typography>
      </CardContent>
    </Card>
  );
}

FileInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileInfo);